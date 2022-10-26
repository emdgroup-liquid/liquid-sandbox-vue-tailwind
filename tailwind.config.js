const liquidPreset = require('@emdgroup-liquid/liquid/dist/css/tailwind-preset.cjs')

module.exports = {
  presets: [liquidPreset],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
