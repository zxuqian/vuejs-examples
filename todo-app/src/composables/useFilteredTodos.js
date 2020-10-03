import { computed, ref } from "vue";

export default function useFilteredTodos(todos) {
  const filter = ref("all");

  // 过滤 todo
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
  });

  return { filter, filteredTodos };
}
