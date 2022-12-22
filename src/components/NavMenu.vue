<template>
  <div>
    <i
      v-if="openMenu"
      @click="toggleMenu"
      class="fa-solid fa-xmark text-blue-500 text-2xl md:hidden mt-1 stroke-1"
    ></i>
    <i
      v-else
      @click="toggleMenu"
      class="fa-solid fa-bars text-blue-500 text-2xl md:hidden mt-1 stroke-1"
    ></i>
  </div>
</template>

<script setup>
const props = defineProps(["openMenu", "toggleMenu"]);
</script>
