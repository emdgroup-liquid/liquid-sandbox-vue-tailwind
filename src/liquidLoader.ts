import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.__LD_ASSET_PATH__ = window.location.origin

defineCustomElements()
