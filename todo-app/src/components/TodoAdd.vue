<template>
  <div class="input-add">
    <input type="text" v-model="todoContent" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoAdd",
  props: ["tid"],
  setup(props, context) {
    return useEmitAddTodo(props.tid, context.emit);
  },
};

// TodoAdd 组件专属 Composable
function useEmitAddTodo(tid, emit) {
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
</script>

<style>
/* 添加框 */
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}

.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}

.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  color: white;
  position: absolute;
  right: 0px;

  cursor: pointer;
  outline: none;
}

.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
