import { defineComponent } from 'vue'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

export default defineComponent({
  name: 'App',
  components: {
    Form,
    Footer,
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
  render() {
    return (
      <div class={`flex flex-col min-h-screen ld-theme-${this.currentTheme}`}>
        <ld-notification placement="bottom"></ld-notification>
        <main class="relative flex items-center" style="min-height: 80vh">
          <ld-bg-cells class="block absolute inset-0"></ld-bg-cells>
          <div class="container mx-auto px-ld-24 pt-ld-40 pb-24 relative max-w-2xl">
            <ld-typo variant="b1" visual-level="b1" class="text-vy mb-ld-40">
              Liquid Sandbox App
            </ld-typo>
            <Form onChangeTheme={this.onChangeTheme} />
          </div>
        </main>
        <Footer />
      </div>
    )
  },
})
