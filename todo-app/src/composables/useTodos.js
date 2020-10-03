import { ref } from "vue";

export default function useTodos() {
  const todos = ref([]);
  // 添加 todo
  const addTodo = (todo) => todos.value.push(todo);

  return {
    todos,
    addTodo,
  };
}
