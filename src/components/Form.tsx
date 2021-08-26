import { defineComponent, PropType, SetupContext } from 'vue'
import { ThemeName } from '@emdgroup-liquid/liquid/dist/types/components/ld-theme/ld-theme'

export default defineComponent({
  name: 'Form',
  props: {
    onChangeTheme: Function as PropType<(theme: ThemeName) => void>,
  },
  emits: {
    changeTheme(payload: ThemeName) {
      return payload
    },
  },
  methods: {
    onThemeChange(theme: ThemeName) {
      this.$emit('changeTheme', theme)
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
          <span>App Theme</span>
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
          Next we have implemented some form validation for you to try out:
        </ld-paragraph>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-ld-24 mb-ld-32">
          <ld-label>
            First Name
            <ld-input
              placeholder="Add your first name"
              value="Jason"
              tone="dark"
            ></ld-input>
            <ld-input-message mode="valid">
              That's a lovely name.
            </ld-input-message>
          </ld-label>

          <ld-label>
            Last Name
            <ld-input
              placeholder="Add your last name"
              value="Parse"
              tone="dark"
            ></ld-input>
            <ld-input-message mode="info">
              Jason Parse? Are you serious?!
            </ld-input-message>
          </ld-label>

          <ld-label>
            Email Address
            <ld-input
              invalid
              type="email"
              placeholder="Add your email address"
              value=""
              tone="dark"
            ></ld-input>
            <ld-input-message>The email address is invalid.</ld-input-message>
          </ld-label>

          <ld-label>
            Phone Number
            <ld-input
              type="phone"
              placeholder="Add your phone number"
              value=""
              tone="dark"
            ></ld-input>
          </ld-label>

          <ld-label>
            <span class="flex justify-between">
              Company
              <ld-tooltip arrow position="top right" class="h-1">
                <ld-paragraph>
                  Just showing off with some tooltip magic here 😉
                </ld-paragraph>
              </ld-tooltip>
            </span>
            <ld-select placeholder="Pick your company">
              <ld-option value="millipore_sigma">MilliporeSigma</ld-option>
            </ld-select>
          </ld-label>

          <ld-label>
            Date
            <ld-input
              type="date"
              value={new Date().toISOString().split('T')[0]}
            ></ld-input>
          </ld-label>
        </div>

        <ld-label class="w-full mb-ld-32">
          Comment
          <ld-input
            multiline
            value=""
            tone="dark"
            style="min-height: 7rem"
          ></ld-input>
        </ld-label>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-ld-24 items-center">
          <ld-label position="right" size="m">
            I accept the terms of service.
            <ld-checkbox tone="dark"></ld-checkbox>
          </ld-label>

          <div class="grid grid-cols-2 gap-ld-16">
            <ld-button mode="secondary">Cancel</ld-button>
            <ld-button>Send</ld-button>
          </div>
        </div>
      </div>
    )
  },
})
