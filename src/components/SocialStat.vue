<script setup lang="ts">
const props = defineProps({ data: Object });

const textColor = () => {
  return props.data?.change[0] === "+" ? "text-limeGreen" : "text-brightRed";
};
</script>

<template>
  <div
    :class="[
      'before:bg-' + props.data?.platform,
      'relative min-h-[13.5rem] w-full max-w-[100%] overflow-hidden rounded-lg bg-lightGrayishBlue text-center before:absolute before:top-0 before:left-0 before:right-0 before:h-[0.225rem] hover:cursor-pointer hover:bg-lightGrayishBlueHover dark:bg-darkDesaturatedBlue dark:hover:bg-darkDesaturatedBlueHover sm:max-w-[15.875rem]',
    ]"
  >
    <div class="mt-8 flex items-center justify-center gap-2 text-sm">
      <img
        :src="'images/icon-' + props.data?.platform + '.svg'"
        :alt="props.data?.platform"
        aria-hidden="true"
      />
      <p class="text-xs font-bold">{{ props.data?.handle }}</p>
    </div>
    <p
      class="mt-7 text-[3.4rem] font-bold leading-[3rem] text-veryDarkBlue dark:text-lightGrayishBlue"
    >
      {{ props.data?.users }}
    </p>
    <p class="mt-2 text-xs uppercase tracking-[0.3rem]">
      {{ props.data?.userTitle }}s
    </p>
    <div
      :class="[
        textColor(),
        'mt-6 flex items-center justify-center gap-1 text-xs font-bold',
      ]"
    >
      <img
        :src="`images/icon-${
          props.data?.change[0] === '+' ? 'up' : 'down'
        }.svg`"
        alt=""
        aria-hidden="true"
      />
      {{ props.data?.change.substring(1) }} Today
    </div>
  </div>
</template>
