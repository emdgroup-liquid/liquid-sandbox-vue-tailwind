import { defineComponent } from 'vue'
import Form from './components/Form/Form'
import { ThemeName } from '@emdgroup-liquid/liquid/dist/types/components/ld-theme/ld-theme'

export default defineComponent({
  name: 'App',
  components: {
    Form,
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
    onChangeTheme(theme: ThemeName) {
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
  render() {
    return (
      <ld-theme
        name={this.currentTheme as ThemeName}
        class="flex flex-col min-h-screen"
      >
        <ld-notification placement="bottom"></ld-notification>
        <div class="relative flex items-center" style="min-height: 80vh">
          <ld-bg-cells class="block absolute inset-0"></ld-bg-cells>
          <div class="container mx-auto px-ld-24 pt-ld-40 pb-24 relative max-w-2xl">
            <ld-heading level="1" visual-level="b1" class="text-vy mb-ld-40">
              Liquid Sandbox App
            </ld-heading>
            <Form onChangeTheme={this.onChangeTheme} />
          </div>
        </div>
        <div
          class="relative flex-grow"
          style="background: var(--ld-thm-bg-secondary); min-height: 12rem"
        ></div>
      </ld-theme>
    )
  },
})
