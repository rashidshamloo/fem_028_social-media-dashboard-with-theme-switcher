<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
  },
  checked: {
    type: Boolean,
  },
});
const emits = defineEmits(["toggle"]);
</script>

<template>
  <div class="relative h-[2em] w-[4em]">
    <input
      type="checkbox"
      class="peer h-0 w-0 opacity-0"
      :id="id"
      aria-label="Toggle Between Dark and Light Mode"
      :checked="checked"
      @change="$emit('toggle')"
    />
    <label
      :for="id"
      class="absolute inset-0 inline-block cursor-pointer rounded-full bg-toggleDark transition-all duration-500 before:absolute before:top-1/2 before:left-[0.35em] before:aspect-square before:w-[1.5em] before:-translate-y-1/2 before:rounded-full before:bg-veryDarkBlue before:transition-all before:duration-500 before:ease-in-out hover:shadow-[0_0.5em_0.5em] hover:shadow-darkGrayishBlue/20 hover:brightness-125 peer-checked:bg-toggleLight peer-checked:bg-none peer-checked:before:translate-x-[1.8em] peer-checked:before:bg-white peer-focus-visible:shadow-xl peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-gray-500 dark:hover:shadow-white/20"
      aria-hidden="true"
    >
    </label>
  </div>
</template>
