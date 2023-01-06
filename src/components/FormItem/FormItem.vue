<script lang="ts">
import { titles } from './titles'
import {
  LdButton,
  LdInput,
  LdInputMessage,
  LdTooltip,
  LdOption,
  LdSelect,
  LdLabel,
  LdCheckbox,
} from '@emdgroup-liquid/liquid/dist/vue'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required, url } from '@vuelidate/validators'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    LdButton,
    LdInput,
    LdInputMessage,
    LdTooltip,
    LdOption,
    LdSelect,
    LdLabel,
    LdCheckbox,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  props: {
    onChangeTheme: Function as PropType<(theme: string) => void>,
  },
  emits: {
    changeTheme(payload: string) {
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
    onThemeChange(ev: CustomEvent) {
      this.$emit('changeTheme', ev.detail[0])
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
                <div>
                  <div>Thanks! We hope you like this sandbox. 🤗</div>
                  <div>
                    <a class='font-bold hover:underline' style="color: inherit" href='https://github.com/emdgroup-liquid/liquid/discussions' target='_blank'><b>Reach out</b></a> 
                    if you have any questions!
                  </div>
                </div>`,
              type: 'info',
              timeout: 0,
            },
          })
        )
      }
    },
  },
})
</script>

<template>
  <div class="bg-wht rounded-l shadow-hover p-ld-32 block">
    <ld-typo variant="h2" class="mb-ld-32">Hi there 👋</ld-typo>

    <ld-typo class="mb-ld-16">
      This small sandbox app demonstrates
      <a
        href="https://emdgroup-liquid.github.io/liquid/"
        class="font-bold hover:underline"
      >
        Liquid Oxygen
      </a>
      used in combination with Vue 3, Typescript, Tailwind CSS and Vite.
    </ld-typo>
    <ld-typo class="mb-ld-24">
      Let's change the theme of the app first:
    </ld-typo>

    <ld-label class="mb-ld-32 w-full">
      App Theme
      <ld-select
        v-on:ldchange="onThemeChange"
        placeholder="Pick a theme"
        prevent-deselection
      >
        <ld-option value="ocean" selected> Ocean </ld-option>
        <ld-option value="bubblegum">Bubblegum</ld-option>
        <ld-option value="shake">Shake</ld-option>
        <ld-option value="solvent">Solvent</ld-option>
        <ld-option value="tea">Tea</ld-option>
      </ld-select>
    </ld-label>

    <ld-typo class="mb-ld-24">
      Next we have set up some form validation:
    </ld-typo>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-ld-24 mb-ld-32">
      <ld-label>
        <span class="flex justify-between">
          Your title (optional)
          <ld-tooltip arrow position="top right" class="h-1">
            <ld-typo>
              We are asking because we'd like to address you correctly.
            </ld-typo>
          </ld-tooltip>
        </span>
        <ld-select
          placeholder="No title"
          v-on:ldinput="
            (ev) => {
              title = ev.detail[0]
            }
          "
        >
          <ld-option
            v-for="title in titles"
            v-bind:key="title"
            v-bind:value="title"
            >{{ title }}
          </ld-option>
        </ld-select>
        <ld-input-message
          mode="valid"
          :style="{ visibility: title ? 'inherit' : 'hidden' }"
        >
          Good pick.
        </ld-input-message>
      </ld-label>

      <ld-label>
        Your full name
        <ld-input
          placeholder="e.g. Jason Parse"
          tone="dark"
          v-bind:value="fullName"
          v-bind:invalid="v$.fullName.$error"
          @input="
            (ev: InputEvent) => {
              fullName = (ev.target as HTMLInputElement).value
            }
          "
          @blur="
            () => {
              v$.fullName.$touch()
            }
          "
        />
        <ld-input-message v-if="v$.fullName.$error" mode="error">
          {{ v$.fullName.$errors[0].$message }}
        </ld-input-message>
        <ld-input-message
          v-else
          mode="valid"
          :style="{ visibility: v$.fullName.$dirty ? 'inherit' : 'hidden' }"
        >
          Lovely name.
        </ld-input-message>
      </ld-label>

      <ld-label>
        Your email address
        <ld-input
          type="email"
          placeholder="e.g. jason.parse@example.com"
          tone="dark"
          v-bind:value="email"
          v-bind:invalid="v$.email.$error"
          @input="
            (ev: InputEvent) => {
              email = (ev.target as HTMLInputElement).value
            }
          "
          @blur="
            () => {
              v$.email.$touch()
            }
          "
        />
        <ld-input-message v-if="v$.email.$error" mode="error">
          {{ v$.email.$errors[0].$message }}
        </ld-input-message>
        <ld-input-message
          v-else
          mode="valid"
          :style="{ visibility: v$.email.$dirty ? 'inherit' : 'hidden' }"
        >
          Lovely email address.
        </ld-input-message>
      </ld-label>

      <ld-label>
        Your website (optional)
        <ld-input
          type="url"
          placeholder="e.g. https://example.com"
          tone="dark"
          v-bind:value="website"
          v-bind:invalid="v$.website.$error"
          @input="(ev: InputEvent) => { website = (ev.target as HTMLInputElement).value }"
          @blur="
            () => {
              v$.website.$touch()
            }
          "
        />
        <ld-input-message v-if="v$.website.$error" mode="error">
          {{ v$.website.$errors[0].$message }}
        </ld-input-message>
        <ld-input-message
          v-else
          mode="valid"
          :style="{
            visibility: website && v$.website.$dirty ? 'inherit' : 'hidden',
          }"
        >
          You even have a website! 👍
        </ld-input-message>
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
      />
    </ld-label>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-ld-24 items-center">
      <ld-label position="right" size="m">
        <span :class="{ 'text-rr': !termsAccepted && v$.termsAccepted.$dirty }">
          I accept the terms (none).
        </span>
        <ld-checkbox
          tone="dark"
          v-bind:checked="termsAccepted"
          @input="
            () => {
              termsAccepted = !termsAccepted
            }
          "
          @blur="
            () => {
              v$.termsAccepted.$touch()
            }
          "
          v-bind:invalid="v$.termsAccepted.$error"
        />
      </ld-label>

      <div class="grid grid-cols-2 gap-ld-16">
        <ld-button @click="onCancel" mode="secondary"> Cancel </ld-button>
        <ld-button @click="onSubmit">Submit</ld-button>
      </div>
    </div>
  </div>
</template>
