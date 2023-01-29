/** @type {import('tailwindcss').Config} */
// contentにてtailwindのどのtypescriptのファイルに適用するかの設定
// pages, componentsフォルダのあらゆるファイルに適用するということ

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {opacity: ['disabled']},
  },
  plugins: [],
}
