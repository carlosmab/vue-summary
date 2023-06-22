import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info)
};

app.config.globalProperties.capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
};

app.config.performance = true;

app.mount('#app')
