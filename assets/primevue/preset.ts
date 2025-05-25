import { definePreset } from "@primeuix/themes"
import Aura from "@primeuix/themes/aura"

const PRIMARY_KEY = "indigo"
const SURFACE_KEY = "neutral"

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: `{${PRIMARY_KEY}.50}`,
      100: `{${PRIMARY_KEY}.100}`,
      200: `{${PRIMARY_KEY}.200}`,
      300: `{${PRIMARY_KEY}.300}`,
      400: `{${PRIMARY_KEY}.400}`,
      500: `{${PRIMARY_KEY}.500}`,
      600: `{${PRIMARY_KEY}.600}`,
      700: `{${PRIMARY_KEY}.700}`,
      800: `{${PRIMARY_KEY}.800}`,
      900: `{${PRIMARY_KEY}.900}`,
      950: `{${PRIMARY_KEY}.950}`,
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: `{${SURFACE_KEY}.50}`,
          100: `{${SURFACE_KEY}.100}`,
          200: `{${SURFACE_KEY}.200}`,
          300: `{${SURFACE_KEY}.300}`,
          400: `{${SURFACE_KEY}.400}`,
          500: `{${SURFACE_KEY}.500}`,
          600: `{${SURFACE_KEY}.600}`,
          700: `{${SURFACE_KEY}.700}`,
          800: `{${SURFACE_KEY}.800}`,
          900: `{${SURFACE_KEY}.900}`,
          950: `{${SURFACE_KEY}.950}`,
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: `{${SURFACE_KEY}.50}`,
          100: `{${SURFACE_KEY}.100}`,
          200: `{${SURFACE_KEY}.200}`,
          300: `{${SURFACE_KEY}.300}`,
          400: `{${SURFACE_KEY}.400}`,
          500: `{${SURFACE_KEY}.500}`,
          600: `{${SURFACE_KEY}.600}`,
          700: `{${SURFACE_KEY}.700}`,
          800: `{${SURFACE_KEY}.800}`,
          900: `{${SURFACE_KEY}.900}`,
          950: `{${SURFACE_KEY}.950}`,
        },
      },
    },
  },
})

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: ".dark",
  },
}
