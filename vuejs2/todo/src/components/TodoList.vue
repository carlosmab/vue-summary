<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todo :todo="todo" @removeTodo="removeTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue';

export default {
  components: {
    Todo
  },
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        const todo = {
          id: Date.now(),
          text: this.capitalize(this.newTodo),
          completed: false
        };
        this.todos.push(todo);
        this.newTodo = '';
      }
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  }
};
</script>