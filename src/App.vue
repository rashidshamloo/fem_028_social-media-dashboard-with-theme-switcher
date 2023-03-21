<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SocialStat from "./components/SocialStat.vue";
import SocialOverview from "./components/SocialOverview.vue";
import data from "./data/data.json";
const enableDarkMode = ref(true);
function toggleDarkMode() {
  enableDarkMode.value = !enableDarkMode.value;
  document.documentElement.classList.toggle("dark");
}
</script>

<template>
  <Header :totalFollowers="23004" @toggle="toggleDarkMode()" />
  <main>
    <div
      class="mt-11 inline-grid min-w-[88%] grid-cols-1 gap-5 sm:min-w-[33.75rem] sm:grid-cols-2 sm:gap-8 lg:min-w-full lg:grid-cols-4"
    >
      <SocialStat v-for="item in data" :data="item" />
    </div>
    <h2
      class="mt-12 w-full max-w-[88%] text-left text-2xl font-bold text-veryDarkBlue dark:text-white lg:max-w-full"
    >
      Overview - Today
    </h2>
    <div
      class="mx-auto mt-6 w-full grid-cols-1 gap-8 grid-areas-small sm:grid sm:w-auto lg:grid-cols-2 lg:grid-areas-large"
    >
      <SocialOverview v-for="item in data" :data="item" />
    </div>
  </main>
  <Footer />
</template>
