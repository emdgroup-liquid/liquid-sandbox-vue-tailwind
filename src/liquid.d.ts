import { JSX as LocalJSX } from '@emdgroup-liquid/liquid'
import { HTMLAttributes } from 'vue'

type LiquidElements<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes, 'className'> & {
      class?: string
    }
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements
      extends LiquidElements<LocalJSX.IntrinsicElements> {}
  }
}
