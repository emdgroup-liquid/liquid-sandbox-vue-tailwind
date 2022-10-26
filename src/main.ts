import App from './App'
import './index.css'
import { setAssetPath } from '@emdgroup-liquid/liquid/dist/components'
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'
import { createApp } from 'vue'

setAssetPath(window.location.origin)
defineCustomElements()

const app = createApp(App)
app.mount('#app')
