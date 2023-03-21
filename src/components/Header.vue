<script setup lang="ts">
import Switch from "./Switch.vue";

const props = defineProps({
  totalFollowers: {
    type: Number,
    required: false,
  },
  enableDarkMode: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["toggle"]);
</script>

<template>
  <header
    class="mx-auto w-full max-w-[88%] items-center justify-between sm:flex lg:max-w-full"
  >
    <div class="text-left">
      <h1
        class="text-2xl font-bold text-veryDarkBlue dark:text-white lg:text-[1.75rem]"
      >
        Social Media Dashboard
      </h1>
      <p v-if="totalFollowers" class="text-sm font-bold">
        Total Followers: {{ totalFollowers.toLocaleString() }}
      </p>
    </div>
    <hr
      class="mt-6 mb-4 border-[1px] border-b-0 border-darkGrayishBlue/70 dark:border-desaturatedBlue/30 lg:hidden"
    />
    <div
      class="text flex items-center justify-between gap-4 text-[0.75rem] font-bold transition-all duration-500 lg:w-auto lg:text-[0.8rem]"
    >
      <p class="text-sm">Dark Mode</p>
      <Switch
        id="theme-toggle"
        :checked="!enableDarkMode"
        @toggle="$emit('toggle')"
      />
    </div>
  </header>
</template>
