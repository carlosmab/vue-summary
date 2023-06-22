import { createStore } from 'vuex';

export const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    removeTodo({ commit }, todoId) {
      commit('removeTodo', todoId);
    }
  },
  getters: {
    getTodos(state) {
      return state.todos;
    }
  }
});