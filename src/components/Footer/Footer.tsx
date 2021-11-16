import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Footer',
  render() {
    return (
      <footer
        class="relative flex-grow"
        style="background: var(--ld-thm-primary-active)"
      >
        <div class="container text-center mx-auto px-ld-24 pt-20 pb-24 max-w-2xl flex flex-col items-center justify-center">
          <ld-typo class="text-wht mb-ld-12">
            Checkout the source code on
            <a
              href="https://github.com/emdgroup-liquid/liquid-sandbox-vue-tailwind"
              class="ml-ld-4 inline-flex items-center"
              style={{ color: 'var(--ld-thm-accent)' }}
            >
              GitHub
              <svg
                role={'presentation'}
                class="inline-block ml-ld-6 h-ld-16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.97248 0C4.01835 0 0 4.13039 0 9.22266C0 13.2965 2.58716 16.7479 6.11009 17.9927C6.55046 18.0493 6.7156 17.7664 6.7156 17.54C6.7156 17.3137 6.7156 16.7479 6.7156 15.9558C4.23853 16.5216 3.68807 14.711 3.68807 14.711C3.30275 13.636 2.69725 13.3531 2.69725 13.3531C1.87156 12.7873 2.75229 12.7873 2.75229 12.7873C3.63303 12.8438 4.12844 13.7491 4.12844 13.7491C4.95413 15.1636 6.22018 14.7676 6.7156 14.5413C6.77064 13.9189 7.04587 13.5228 7.26606 13.2965C5.2844 13.0702 3.19266 12.278 3.19266 8.71344C3.19266 7.69498 3.52294 6.90285 4.12844 6.22388C4.07339 6.05414 3.74312 5.09227 4.23853 3.84749C4.23853 3.84749 5.00917 3.62117 6.7156 4.80936C7.43119 4.58304 8.20183 4.52646 8.97248 4.52646C9.74312 4.52646 10.5138 4.63962 11.2294 4.80936C12.9358 3.62117 13.7064 3.84749 13.7064 3.84749C14.2018 5.09227 13.8716 6.05414 13.8165 6.28046C14.367 6.90285 14.7523 7.75156 14.7523 8.77002C14.7523 12.3346 12.6606 13.0702 10.6789 13.2965C11.0092 13.5794 11.2844 14.1452 11.2844 14.9939C11.2844 16.2387 11.2844 17.2006 11.2844 17.54C11.2844 17.7664 11.4495 18.0493 11.8899 17.9927C15.4679 16.7479 18 13.2965 18 9.22266C17.945 4.13039 13.9266 0 8.97248 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </ld-typo>
          <ld-typo class="text-wht opacity-60">
            Made with{' '}
            <ld-icon
              name="tea-pot"
              aria-label="lots of tea"
              class="transform translate-y-ld-4"
            ></ld-icon>{' '}
            by the UX Strategy & Design Team at EMD Digital
          </ld-typo>
        </div>
      </footer>
    )
  },
})
