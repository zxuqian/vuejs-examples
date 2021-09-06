# Vue 留言板项目

Vue 3.0 + Tailwind CSS + Notion API + Express 实现的留言板项目。暂时只能自己发表留言和回复，如果想要多用户发表，需要在 Notion 中添加多个用户，或者再创建一个 database，实现登录注册功能。

在项目根目录下创建 `.env` 文件，把 `NOTION_KEY、NOTION_DB_ID 和 NOTION_CURR_USER_ID` 替换为自己的。

安装依赖：
```
yarn install
```

启动项目：
```
yarn dev
```

打包项目：
```
yarn build
```

部署项目：
```
vercel
```