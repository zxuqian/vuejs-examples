import { ref } from "vue";

export default function useEmitAddTodo(tid, emit) {
  const todoContent = ref("");

  const emitAddTodo = () => {
    const todo = {
      id: tid,
      content: todoContent.value,
      completed: false,
    };
    emit("add-todo", todo);
    todoContent.value = "";
  };

  return {
    todoContent,
    emitAddTodo,
  };
}
