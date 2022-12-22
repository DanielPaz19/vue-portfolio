<template>
  <div
    class="container px-1 mx-auto h-full text-6xl md:text-7xl mt-28 md:mt-52"
    id="home"
  >
    <h1 class="text-light text-center font-bold">
      Full Stack <br /><span class="text-blue-500"> Web Developer </span>
    </h1>
    <p class="text-light text-xl font-light text-center max-w-md mx-auto mt-8">
      Hi! I'm <strong class="text-blue-400">DANIELLE PAZ</strong> an experienced
      developer.
    </p>
    <div class="px-8 mt-16 flex flex-col gap-4 md:flex-row md:justify-center">
      <Button
        color="red"
        href="#contact"
        title="Hire Me"
        class="w-full md:w-auto"
      />
      <ButtonOutline
        title="Download Resume"
        color="blue"
        class="w-full md:w-auto"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import ButtonOutline from "./ButtonOutline.vue";
</script>
