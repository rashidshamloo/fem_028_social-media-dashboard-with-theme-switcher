<script setup lang="ts">
import SocialOverviewItem from "./SocialOverviewItem.vue";
const props = defineProps({ data: Object });
let area: string;
switch (props.data?.platform) {
  case "facebook":
    area = "grid-in-a1";
    break;
  case "instagram":
    area = "grid-in-a2";
    break;
  case "twitter":
    area = "grid-in-a3";
    break;
  case "youtube":
  default:
    area = "grid-in-a4";
}
</script>

<template>
  <div
    :class="[
      area,
      'mb-4 flex flex-col items-center gap-4 sm:mb-0 sm:flex-row sm:gap-8',
    ]"
  >
    <SocialOverviewItem
      v-for="item in data?.stats"
      :data="item"
      :platform="data?.platform"
    />
  </div>
</template>
