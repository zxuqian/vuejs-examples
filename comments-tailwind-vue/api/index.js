const { Client } = require("@notionhq/client");
require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
// const port = 3001;

const NOTION_KEY = process.env.NOTION_KEY;
const NOTION_DB_ID = process.env.NOTION_DB_ID;
const NOTION_CURR_USER_ID = process.env.NOTION_CURR_USER_ID;

const notion = new Client({ auth: NOTION_KEY });

async function getAllComments() {
  const result = await notion.databases.query({ database_id: NOTION_DB_ID });
  const comments = new Map();
  // 原始评论数据
  result?.results?.forEach((page) => {
    comments.set(page.id, transformPageObject(page));
  });

  // 组装回复，把关系 id 替换为实际评论
  let commentsPopulated = [...comments.values()].reduce((acc, curr) => {
    if (!curr.replyTo) {
      curr.replies = curr.replies.map((reply) => comments.get(reply.id));
      acc.push(curr);
    }
    return acc;
  }, []);

  return commentsPopulated;
}

async function addComment({ content, replyTo = "" }) {
  let no =
    (await notion.databases.query({ database_id: NOTION_DB_ID })).results
      .length + 1;
  let { avatar_url, name } = await notion.users.retrieve({
    user_id: NOTION_CURR_USER_ID,
  });

  const page = await notion.request({
    method: "POST",
    path: "pages",
    body: {
      parent: { database_id: NOTION_DB_ID },
      properties: {
        no: {
          title: [
            {
              text: {
                content: no.toString(),
              },
            },
          ],
        },
        user: {
          rich_text: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        avatar: {
          url: avatar_url,
        },
        content: {
          rich_text: [
            {
              text: {
                content,
              },
            },
          ],
        },
        // 如果有 replyTO 参数传递进来的，再添加到请求 body 中
        ...(replyTo && {
          replyTo: {
            relation: [
              {
                id: replyTo,
              },
            ],
          },
        }),
      },
    },
  });

  return transformPageObject(page);
}

app.get("/api/comments", async (req, res) => {
  try {
    const comments = await getAllComments();
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/api/comments", async (req, res) => {
  try {
    const newPage = await addComment(req.body);
    res.status(201).json(newPage);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

function transformPageObject(page) {
  return {
    id: page.id,
    user: page.properties.user.rich_text[0].text.content,
    time: getRelativeTimeDesc(page.properties.time.created_time),
    content: page.properties.content.rich_text[0].text.content,
    avatar: page.properties.avatar.url,
    replies: page.properties.replies.relation,
    replyTo: page.properties.replyTo?.relation[0]?.id,
  };
}

function getRelativeTimeDesc(time) {
  const currentInMs = new Date().getTime();
  const timeInMs = new Date(time).getTime();

  const minuteInMs = 60 * 1000;
  const hourInMs = 60 * minuteInMs;
  const dayInMs = 24 * hourInMs;
  const monthInMs = 30 * dayInMs;
  const yearInMs = 365 * dayInMs;

  const relativeTime = currentInMs - timeInMs;
  if (relativeTime < minuteInMs) {
    return `${Math.ceil(relativeTime / 1000)} 秒前`;
  } else if (relativeTime < hourInMs) {
    return `${Math.ceil(relativeTime / minuteInMs)} 分钟前`;
  } else if (relativeTime < dayInMs) {
    return `${Math.ceil(relativeTime / hourInMs)} 小时前`;
  } else if (relativeTime < monthInMs) {
    return `${Math.ceil(relativeTime / dayInMs)} 天前`;
  } else if (relativeTime < yearInMs) {
    return `${Math.ceil(relativeTime / monthInMs)} 月前`;
  } else {
    return `${Math.ceil(relativeTime / yearInMs)} 年前`;
  }
}

module.exports = app;
