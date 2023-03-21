<script setup lang="ts">
const props = defineProps({ data: Object, platform: String });

const textColor = () => {
  return props.data?.change[0] === "+" ? "text-limeGreen" : "text-brightRed";
};
</script>

<template>
  <div
    class="relative mx-auto flex min-h-[7.75rem] w-full max-w-[88%] flex-wrap overflow-hidden rounded-lg bg-lightGrayishBlue pl-6 pr-7 pt-7 pb-3 hover:cursor-pointer hover:bg-lightGrayishBlueHover dark:bg-darkDesaturatedBlue dark:hover:bg-darkDesaturatedBlueHover sm:max-w-[15.875rem]"
  >
    <p class="w-1/2 text-sm font-bold">{{ props.data?.title }}</p>
    <div class="flex w-1/2 items-start justify-end">
      <img
        :src="'images/icon-' + platform + '.svg'"
        :alt="platform"
        aria-hidden="true"
      />
    </div>
    <p
      class="mt-auto w-1/2 text-[2rem] font-bold text-veryDarkBlue dark:text-lightGrayishBlue"
    >
      {{ props.data?.amount }}
    </p>
    <div
      :class="[
        textColor(),
        'mt-auto mb-2 flex w-1/2 items-center justify-end gap-1 text-xs font-bold',
      ]"
    >
      <img
        :src="`images/icon-${
          props.data?.change[0] === '+' ? 'up' : 'down'
        }.svg`"
        alt=""
        aria-hidden="true"
      />
      {{ props.data?.change.substring(1) }}%
    </div>
  </div>
</template>
