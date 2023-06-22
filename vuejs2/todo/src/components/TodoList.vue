<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todo :todo="todo" />
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
        this.$store.dispatch('addTodo', todo);
        this.newTodo = '';
      }
    },
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>