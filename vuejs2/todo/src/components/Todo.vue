<template>
  <div>
    <input type="checkbox" v-model="todo.completed" @change="toggleCompletion">
    <span :class="{ 'completed': todo.completed }">{{ todo.text }}</span>
    <button @click="removeTodo">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleCompletion() {
      this.todo.completed = !this.todo.completed;
    },
    removeTodo() {
      this.$emit('removeTodo', this.todo.id);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>