import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
// import './service/axios_demo'
import hyRequest from './service'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(globalRegister)
app.mount('#app')

// console.log(VUE_APP_BASE_URL)
// console.log(VUE_APP_BASE_NAME)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: true
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
