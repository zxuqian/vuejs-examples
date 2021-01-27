import { onMounted, ref } from "vue";

export default function useTodos() {
  const todos = ref([]);

  // 添加 todo
  const addTodo = (todo) => todos.value.push(todo);

  // 获取远程 todos
  const fetchTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const rawTodos = await response.json();
    todos.value = rawTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed,
    }));
  };

  onMounted(() => {
    fetchTodos();
  });

  return {
    todos,
    addTodo,
  };
}
