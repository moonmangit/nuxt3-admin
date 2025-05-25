const LOCAL_STORAGE_KEY = "dark-mode"

export const useDarkModeStore = defineStore("dark-mode", () => {
  // beware if switch ssr to 'true', it will cause an error caused by document not defined on server side
  // consider changing to cookie or other storage method
  const isDark = ref(localStorage.getItem(LOCAL_STORAGE_KEY) === "true")
  if (isDark.value) {
    toDark()
  } else {
    toLight()
  }

  function toDark() {
    isDark.value = true
    document.documentElement.classList.toggle("dark", true)
    localStorage.setItem(LOCAL_STORAGE_KEY, "true")
  }
  function toLight() {
    isDark.value = false
    document.documentElement.classList.toggle("dark", false)
    localStorage.setItem(LOCAL_STORAGE_KEY, "false")
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
