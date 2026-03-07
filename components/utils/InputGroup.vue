<template>
  <div>
    <label
      v-if="label && label.length > 0"
      :for="inputId"
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {{ label }}
    </label>
    <div class="relative">
      <!-- Left Icon -->
      <div
        v-if="leftIcon && leftIcon.length > 0"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <Icon :name="leftIcon" class="h-5 w-5 text-gray-400" />
      </div>

      <!-- Input Field -->
      <input
        :id="inputId"
        :name="name"
        :type="computedInputType"
        :autocomplete="autocomplete"
        :required="required"
        :placeholder="placeholder"
        :value="modelValue"
        :class="inputClasses"
        @input="$emit('update:modelValue', ($event as any).target.value)"
      />

      <!-- Right Button/Action -->
      <button
        v-if="shouldShowRightButton"
        type="button"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        @click="handleRightClick"
      >
        <Icon
          :name="computedRightIcon"
          class="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string
  label?: string
  name: string
  type?: string
  autocomplete?: string
  required?: boolean
  placeholder?: string
  leftIcon?: string
  rightIcon?: string
  rightAction?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  autocomplete: "off",
  required: false,
  label: "",
  placeholder: "",
  leftIcon: "",
  rightIcon: "",
  rightAction: () => {},
})

const _emit = defineEmits<{
  "update:modelValue": [value: string]
}>()

const inputId = computed(
  () => `input-${props.name}-${Math.random().toString(36).substr(2, 9)}`,
)

const showPassword = ref(false)

const computedInputType = computed(() => {
  if (props.type === "password" && showPassword.value) {
    return "text"
  }
  return props.type
})

const computedRightIcon = computed(() => {
  if (props.type === "password") {
    return showPassword.value ? "mdi:eye-off" : "mdi:eye"
  }
  return props.rightIcon
})

const shouldShowRightButton = computed(() => {
  return props.type === "password" || (props.rightIcon && props.rightAction)
})

const inputClasses = computed(() => {
  const baseClasses = [
    "block",
    "w-full",
    "py-3",
    "border",
    "border-gray-300",
    "dark:border-gray-600",
    "rounded-lg",
    "bg-white",
    "dark:bg-gray-700",
    "text-gray-900",
    "dark:text-white",
    "placeholder-gray-500",
    "dark:placeholder-gray-400",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-500",
    "focus:border-transparent",
    "transition-colors",
  ]

  // Add left padding if there's a left icon
  if (props.leftIcon) {
    baseClasses.push("pl-10")
  } else {
    baseClasses.push("pl-3")
  }

  // Add right padding if there's a right button
  if (props.type === "password" || props.rightIcon) {
    baseClasses.push("pr-10")
  } else {
    baseClasses.push("pr-3")
  }

  return baseClasses.join(" ")
})

const handleRightClick = () => {
  if (props.type === "password") {
    showPassword.value = !showPassword.value
  }
  if (props.rightAction) {
    props.rightAction()
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
