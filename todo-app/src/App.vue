<template>
  <main>
    <div class="container">
      <h1>欢迎使用 Feng 待办事项！</h1>
      <todo-add @add-todo="addTodo" />
      <todo-filter />
      <todo-list :todos="todos" />
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    const todos = ref([]);
    const filter = ref("");

    const addTodo = (todo) => todos.value.push(todo);

    const filteredTodos = (filter) => {
      if (filter) {
        todos.value.filter((todo) =>
          filter === "done" ? todo.completed : !todo.completed
        );
      }
      return todos;
    };

    return {
      todos,
      filter,
      addTodo,
      filteredTodos,
    };
  },
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
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
