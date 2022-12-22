<template>
  <div class="relative pt-3">
    <div class="flex justify-between md:items-center">
      <p class="text-3xl text-blue-500 p-3 md:p-0 min-w-fit">
        <a href="#home">Danielle Paz</a>
      </p>
      <Navlist :openMenu="openMenu" class="mt-14 md:mt-1" />
      <!-- <div class="hidden md:block p-3"><Button /></div> -->
      <div class="block md:hidden p-3">
        <NavMenu :openMenu="openMenu" :toggleMenu="toggleMenu" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navlist from "./Navlist.vue";
import NavMenu from "./NavMenu.vue";
import { ref } from "vue";

const openMenu = ref(false);

const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>
