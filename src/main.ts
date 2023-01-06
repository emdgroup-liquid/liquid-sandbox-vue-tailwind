import App from './App.vue'
import './index.css'
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'
import { createApp } from 'vue'

declare global {
  interface Window {
    __LD_ASSET_PATH__?: string
  }
}

window.__LD_ASSET_PATH__ = window.location.origin
defineCustomElements()

createApp(App).mount('#app')
