<template>
  <div class="container mx-auto h-96">
    <div
      class="md:max-w-7xl md:container md:mx-auto md:fixed md:top-0 md:left-0 md:right-0 md:px-5"
    >
      <Navbar />
    </div>
    <Hero />
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Hero from "./Hero.vue";
</script>
