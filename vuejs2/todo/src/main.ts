import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { errorHandler } from './utils/error-handler'
import { capitalizeString } from './utils/capitalize-string'

const app = createApp(App)
app.config.errorHandler = errorHandler;
app.config.performance = true;
app.config.globalProperties.capitalizeString = capitalizeString;

app.mount('#app')
