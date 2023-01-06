<script lang="ts">
import FooterItem from './components/FooterItem/FooterItem.vue'
import FormItem from './components/FormItem/FormItem.vue'
import {
  LdTypo,
  LdBgCells,
  LdNotification,
} from '@emdgroup-liquid/liquid/dist/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    FormItem,
    FooterItem,
    LdBgCells,
    LdNotification,
    LdTypo,
  },
  data() {
    return {
      currentTheme: 'ocean',
      successMessages: [
        'Nice! 👍',
        'Aaaweeesome! 🙌',
        'Rock on! 🤘',
        'How cool is that?! 😎',
        'Rad! 🤓',
        'Supersonic! ⚡️',
        'Magic! ✨',
        'Groovy baby! 🕺',
        'Lovely! 🥰',
        'Smooth! 💆‍♀️',
        'Mind-blowing! 🤯️',
        'Excellent! 👌️',
        'Delicious! 🤤️',
        'Outa space! 👽',
      ],
    }
  },
  methods: {
    onChangeTheme(theme: string) {
      this.currentTheme = theme
      setTimeout(() => {
        dispatchEvent(new CustomEvent('ldNotificationClear'))
        dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: this.successMessages[0],
              type: 'info',
              timeout: 2000,
            },
          })
        )
        this.successMessages = [
          ...this.successMessages.slice(1),
          this.successMessages[0],
        ]
      }, 500)
    },
  },
})
</script>

<template>
  <div class="flex flex-col min-h-screen" :class="['ld-theme-' + currentTheme]">
    <ld-notification placement="bottom" />
    <main class="relative flex items-center" style="min-height: 80vh">
      <ld-bg-cells class="block absolute inset-0" />
      <div class="container mx-auto px-ld-24 pt-ld-40 pb-24 relative max-w-2xl">
        <ld-typo variant="b1" class="text-vy mb-ld-40">
          Liquid Sandbox App
        </ld-typo>
        <form-item v-on:changeTheme="onChangeTheme" />
      </div>
    </main>
    <footer-item />
  </div>
</template>
