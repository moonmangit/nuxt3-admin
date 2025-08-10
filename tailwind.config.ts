import type { Config } from "tailwindcss"
import PrimeUI from "tailwindcss-primeui"

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [PrimeUI],
}
