import { createApp } from 'vue'
import App from './App'
import './index.css'

import { JSX as LocalJSX } from '@emdgroup-liquid/liquid/dist/loader'
import { HTMLAttributes } from 'vue'

import { setAssetPath } from '@emdgroup-liquid/liquid/dist/components'

import { LdBgCells } from '@emdgroup-liquid/liquid/dist/components/ld-bg-cells'
import { LdButton } from '@emdgroup-liquid/liquid/dist/components/ld-button'
import { LdCheckbox } from '@emdgroup-liquid/liquid/dist/components/ld-checkbox'
import { LdIcon } from '@emdgroup-liquid/liquid/dist/components/ld-icon'
import { LdInput } from '@emdgroup-liquid/liquid/dist/components/ld-input'
import { LdInputMessage } from '@emdgroup-liquid/liquid/dist/components/ld-input-message'
import { LdLabel } from '@emdgroup-liquid/liquid/dist/components/ld-label'
import { LdNotification } from '@emdgroup-liquid/liquid/dist/components/ld-notification'
import { LdOption } from '@emdgroup-liquid/liquid/dist/components/ld-option'
import { LdOptionInternal } from '@emdgroup-liquid/liquid/dist/components/ld-option-internal'
import { LdSelectPopper } from '@emdgroup-liquid/liquid/dist/components/ld-select-popper'
import { LdSelect } from '@emdgroup-liquid/liquid/dist/components/ld-select'
import { LdTooltip } from '@emdgroup-liquid/liquid/dist/components/ld-tooltip'
import { LdTooltipPopper } from '@emdgroup-liquid/liquid/dist/components/ld-tooltip-popper'
import { LdTypo } from '@emdgroup-liquid/liquid/dist/components/ld-typo'

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
customElements.define('ld-typo', LdTypo)
customElements.define('ld-icon', LdIcon)
customElements.define('ld-input', LdInput)
customElements.define('ld-input-message', LdInputMessage)
customElements.define('ld-label', LdLabel)
customElements.define('ld-notification', LdNotification)
customElements.define('ld-option', LdOption)
customElements.define('ld-option-internal', LdOptionInternal)
customElements.define('ld-select-popper', LdSelectPopper)
customElements.define('ld-select', LdSelect)
customElements.define('ld-tooltip', LdTooltip)
customElements.define('ld-tooltip-popper', LdTooltipPopper)

const app = createApp(App)
app.mount('#app')
