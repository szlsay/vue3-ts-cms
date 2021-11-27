import { App } from 'vue'
// import 'element-plus/theme-chalk/index.css'
// import { ElButton, ElInput } from 'element-plus'

// 导入index.css
import 'element-plus/dist/index.css'
// 局部导入的路径
import { ElButton, ElInput } from 'element-plus/lib/components'

const components = [ElButton, ElInput]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
