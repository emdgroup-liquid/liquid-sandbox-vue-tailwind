import { defineComponent, PropType } from 'vue'
import { ThemeName } from '@emdgroup-liquid/liquid/dist/types/components/ld-theme/ld-theme'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required, url } from '@vuelidate/validators'
import { titles } from './titles'

export default defineComponent({
  name: 'Form',
  setup() {
    return { v$: useVuelidate() }
  },
  props: {
    onChangeTheme: Function as PropType<(theme: ThemeName) => void>,
  },
  emits: {
    changeTheme(payload: ThemeName) {
      return payload
    },
  },
  data() {
    return {
      titles,
      fullName: '',
      title: '',
      email: '',
      website: '',
      termsAccepted: false,
    }
  },
  validations() {
    return {
      fullName: {
        required: helpers.withMessage('Your full name is required.', required),
      },
      email: {
        required: helpers.withMessage(
          'Your email address is required.',
          required
        ),
        email: helpers.withMessage('This email address is invalid.', email),
      },
      website: {
        url: helpers.withMessage('This URL is invalid.', url),
      },
      termsAccepted: {
        checked: (value: boolean) => value == true,
      },
    }
  },
  methods: {
    onThemeChange(theme: ThemeName) {
      this.$emit('changeTheme', theme)
    },
    onCancel() {
      dispatchEvent(new CustomEvent('ldNotificationClear'))
      dispatchEvent(
        new CustomEvent('ldNotificationAdd', {
          detail: {
            content: "This button doesn't really do anything. 👻",
            type: 'warn',
          },
        })
      )
    },
    onSubmit() {
      this.v$.$touch()
      if (this.v$.$error) {
        dispatchEvent(new CustomEvent('ldNotificationClear'))
        dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: 'The form is invalid! 😱',
              type: 'alert',
            },
          })
        )
      } else {
        dispatchEvent(new CustomEvent('ldNotificationClear'))
        dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: `
                <span class="block">Thanks! We hope you like this sandbox. 🤗<span>
                <span class="block">
                  <a class='font-bold hover:underline' href='https://github.com/emdgroup-liquid/liquid/discussions' target='_blank'>Reach out</a> 
                  if you have any questions!
                </span>`,
              type: 'info',
              timeout: 0,
            },
          })
        )
      }
    },
  },
  render() {
    return (
      <div class="bg-wht rounded-l shadow-hover p-ld-32">
        <ld-heading level="2" class="mb-ld-32">
          Hi there 👋
        </ld-heading>

        <ld-paragraph class="mb-ld-16">
          This small sandbox app demonstrates{' '}
          <a
            href="https://emdgroup-liquid.github.io/liquid/"
            class="font-bold hover:underline"
          >
            Liquid Oxygen
          </a>{' '}
          used in combination with Vue 3, Typescript, Tailwind CSS and Vite.
        </ld-paragraph>
        <ld-paragraph class="mb-ld-24">
          Let's change the theme of the app first:
        </ld-paragraph>

        <ld-label class="mb-ld-32 w-full">
          App Theme
          <ld-select
            onChange={(ev: Event) =>
              this.onThemeChange((ev as CustomEvent).detail[0])
            }
            placeholder="Pick a theme"
            prevent-deselection
          >
            <ld-option value="ocean" selected>
              Ocean
            </ld-option>
            <ld-option value="bubblegum">Bubblegum</ld-option>
            <ld-option value="shake">Shake</ld-option>
            <ld-option value="solvent">Solvent</ld-option>
            <ld-option value="tea">Tea</ld-option>
          </ld-select>
        </ld-label>

        <ld-paragraph class="mb-ld-24">
          Next we have set up some form validation:
        </ld-paragraph>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-ld-24 mb-ld-32">
          <ld-label>
            <span class="flex justify-between">
              Your title (optional)
              <ld-tooltip arrow position="top right" class="h-1">
                <ld-paragraph>
                  We are asking because we'd like to address you correctly.
                </ld-paragraph>
              </ld-tooltip>
            </span>
            <ld-select
              placeholder="No title"
              onInput={(ev: Event) => {
                this.title = (ev as CustomEvent).detail[0]
              }}
            >
              {this.titles.map((title) => (
                <ld-option key={title} value={title}>
                  {title}
                </ld-option>
              ))}
            </ld-select>
            <ld-input-message
              mode="valid"
              style={{
                visibility: this.title ? 'inherit' : 'hidden',
              }}
            >
              Good pick.
            </ld-input-message>
          </ld-label>

          <ld-label>
            Your full name
            <ld-input
              placeholder="e.g. Jason Parse"
              tone="dark"
              value={this.fullName}
              invalid={this.v$.fullName.$error}
              onInput={(ev: Event) => {
                this.fullName = (ev.target as HTMLInputElement).value
              }}
              onBlur={(ev: Event) => {
                this.v$.fullName.$touch()
              }}
            ></ld-input>
            {this.v$.fullName.$error ? (
              <ld-input-message mode="error">
                {this.v$.fullName.$errors[0].$message}
              </ld-input-message>
            ) : (
              <ld-input-message
                mode="valid"
                style={{
                  visibility: this.v$.fullName.$dirty ? 'inherit' : 'hidden',
                }}
              >
                Lovely name.
              </ld-input-message>
            )}
          </ld-label>

          <ld-label>
            Your email address
            <ld-input
              type="email"
              placeholder="e.g. jason.parse@example.com"
              tone="dark"
              value={this.email}
              invalid={this.v$.email.$error}
              onInput={(ev: Event) => {
                this.email = (ev.target as HTMLInputElement).value
              }}
              onBlur={(ev: Event) => {
                this.v$.email.$touch()
              }}
            ></ld-input>
            {this.v$.email.$error ? (
              <ld-input-message mode="error">
                {this.v$.email.$errors[0].$message}
              </ld-input-message>
            ) : (
              <ld-input-message
                mode="valid"
                style={{
                  visibility: this.v$.email.$dirty ? 'inherit' : 'hidden',
                }}
              >
                Lovely email address.
              </ld-input-message>
            )}
          </ld-label>

          <ld-label>
            Your website (optional)
            <ld-input
              type="url"
              placeholder="e.g. https://example.com"
              tone="dark"
              value={this.website}
              invalid={this.v$.website.$error}
              onInput={(ev: Event) => {
                this.website = (ev.target as HTMLInputElement).value
              }}
              onBlur={(ev: Event) => {
                this.v$.website.$touch()
              }}
            ></ld-input>
            {this.v$.website.$error ? (
              <ld-input-message mode="error">
                {this.v$.website.$errors[0].$message}
              </ld-input-message>
            ) : (
              <ld-input-message
                mode="valid"
                style={{
                  visibility:
                    this.website && this.v$.website.$dirty
                      ? 'inherit'
                      : 'hidden',
                }}
              >
                You even have a website! 👍
              </ld-input-message>
            )}
          </ld-label>
        </div>

        <ld-label class="w-full mb-ld-32">
          Comment (optional)
          <ld-input
            multiline
            placeholder="Be creative!"
            value=""
            tone="dark"
            style="min-height: 7rem"
          ></ld-input>
        </ld-label>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-ld-24 items-center">
          <ld-label position="right" size="m">
            <span
              class={{
                'text-rr': !this.termsAccepted && this.v$.termsAccepted.$dirty,
              }}
            >
              I accept the terms (none).
            </span>
            <ld-checkbox
              tone="dark"
              checked={this.termsAccepted}
              onInput={() => {
                this.termsAccepted = !this.termsAccepted
              }}
              onBlur={(ev: Event) => {
                this.v$.termsAccepted.$touch()
              }}
              invalid={this.v$.termsAccepted.$error}
            ></ld-checkbox>
          </ld-label>

          <div class="grid grid-cols-2 gap-ld-16">
            <ld-button onClick={this.onCancel} mode="secondary">
              Cancel
            </ld-button>
            <ld-button onClick={this.onSubmit}>Submit</ld-button>
          </div>
        </div>
      </div>
    )
  },
})
