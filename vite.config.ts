import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ld-')
        },
      },
    }),
    vueJsx({
      isCustomElement: tag => tag.startsWith('ld-')
    }),
    copy({
      targets: [
        {
          src: "node_modules/@emdgroup-liquid/liquid/dist/liquid/assets/*",
          dest: "public/assets"
        }
      ],
      hook: "buildStart"
    })
  ]
})
