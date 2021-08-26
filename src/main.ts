import { createApp } from 'vue'
import App from './App'
import './index.css'

import { JSX as LocalJSX } from '@emdgroup-liquid/liquid/dist/loader'
import { HTMLAttributes } from 'vue'

import { defineCustomElements, setAssetPath } from '@emdgroup-liquid/liquid'

import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'

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
defineCustomElements()

const app = createApp(App)
app.mount('#app')
