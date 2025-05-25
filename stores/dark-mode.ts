export const useDarkMode = defineStore("dark-mode", () => {
  const isDark = ref(false)

  function toDark() {
    isDark.value = true
    document.documentElement.classList.toggle("dark", true)
  }
  function toLight() {
    isDark.value = false
    document.documentElement.classList.toggle("dark", false)
  }
  function toggle() {
    if (isDark.value) {
      toLight()
    } else {
      toDark()
    }
  }

  return {
    isDark,
    toDark,
    toLight,
    toggle,
  }
})
