import { createApp } from 'vue'
import App from './App'
import './index.css'

import { JSX as LocalJSX } from '@emdgroup-liquid/liquid/dist/loader'
import { HTMLAttributes } from 'vue'

import { setAssetPath } from '@emdgroup-liquid/liquid'

import {
  LdBgCells,
  LdButton,
  LdCheckbox,
  LdHeading,
  LdInput,
  LdInputMessage,
  LdLabel,
  LdNotification,
  LdOption,
  LdOptionInternal,
  LdParagraph,
  LdSelect,
  LdTheme,
  LdTooltip,
} from '@emdgroup-liquid/liquid/dist/custom-elements'

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
customElements.define('ld-bg-cells', LdBgCells)
customElements.define('ld-button', LdButton)
customElements.define('ld-checkbox', LdCheckbox)
customElements.define('ld-heading', LdHeading)
customElements.define('ld-input', LdInput)
customElements.define('ld-input-message', LdInputMessage)
customElements.define('ld-label', LdLabel)
customElements.define('ld-notification', LdNotification)
customElements.define('ld-option', LdOption)
customElements.define('ld-option-internal', LdOptionInternal)
customElements.define('ld-paragraph', LdParagraph)
customElements.define('ld-select', LdSelect)
customElements.define('ld-theme', LdTheme)
customElements.define('ld-tooltip', LdTooltip)

const app = createApp(App)
app.mount('#app')
