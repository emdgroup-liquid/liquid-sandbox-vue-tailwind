import App from './App'
import './index.css'
import { setAssetPath } from '@emdgroup-liquid/liquid/dist/components'
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import { JSX as LocalJSX } from '@emdgroup-liquid/liquid/dist/loader'
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'
import { createApp } from 'vue'
import { HTMLAttributes } from 'vue'

type LiquidElements<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes, 'className'> & {
      class?: string
    }
}

declare global {
  namespace JSX {
    interface IntrinsicElements
      extends LiquidElements<LocalJSX.IntrinsicElements> {}
  }
}

setAssetPath(window.location.origin)

const app = createApp(App)
app.mount('#app')
