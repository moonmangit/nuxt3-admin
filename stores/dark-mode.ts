const LOCAL_STORAGE_KEY = "dark-mode"
const LOCAL_STORAGE_DARK_VALUE = "true"
const LOCAL_STORAGE_LIGHT_VALUE = "false"
const DARK_CLASS = "dark"

export const useDarkModeStore = defineStore("dark-mode", () => {
  // beware if switch ssr to 'true', it will cause an error caused by document not defined on server side
  // consider changing to cookie or other storage method
  const isDark = ref(
    localStorage.getItem(LOCAL_STORAGE_KEY) === LOCAL_STORAGE_DARK_VALUE,
  )

  // set value
  function toDark() {
    isDark.value = true
    document.documentElement.classList.toggle(DARK_CLASS, true)
    localStorage.setItem(LOCAL_STORAGE_KEY, LOCAL_STORAGE_DARK_VALUE)
  }
  function toLight() {
    isDark.value = false
    document.documentElement.classList.toggle(DARK_CLASS, false)
    localStorage.setItem(LOCAL_STORAGE_KEY, LOCAL_STORAGE_LIGHT_VALUE)
  }

  // macro functions
  function sync() {
    return isDark.value ? toDark() : toLight()
  }
  function toggle() {
    return isDark.value ? toLight() : toDark()
  }

  return {
    isDark,
    toDark,
    toLight,
    toggle,
    sync,
  }
})
