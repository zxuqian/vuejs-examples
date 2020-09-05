<template>
  <div class="todo-list">
    <todo-list-item v-for="n in 3" :key="n">Todo {{n}}</todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>