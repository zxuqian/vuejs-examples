<template>
  <main>
    <div class="container">
      <h1>Feng Todo</h1>
      <input type="text" name="todo" id class="input-suffix" />
      <div class="filters">
        <span class="filter">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未完成</span>
      </div>
      <div class="tood-list">
        <div class="todo-item">
          <label>
            <input type="checkbox" name id />
            Todo 1
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" name id />
            Todo 2
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" name id />
            Todo 3
          </label>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
}

.container {
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 24px 18px;
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 24px;
}

/* 添加框 */
.input-suffix {
  border: 1px solid #eeeeee;
  padding: 10px 8px;
  border-radius: 8px;
}
</style>
