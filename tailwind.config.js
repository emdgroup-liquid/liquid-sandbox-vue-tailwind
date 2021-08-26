const liquidPreset = require('@emdgroup-liquid/liquid/dist/css/tailwind-preset.js')

module.exports = {
  presets: [liquidPreset],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}