<template>
  <div class="container mx-auto h-96 text-7xl mt-20" id="home">
    <h1 class="text-light text-center font-bold">
      Full Stack <br /><span class="text-blue-500"> Web Developer </span>
    </h1>
    <p class="text-light text-xl font-light text-center max-w-md mx-auto mt-5">
      Hi! I'm <strong class="text-blue-400">DANIELLE PAZ</strong> an experienced
      developer.
    </p>
    <div class="px-8 mt-10 flex flex-col gap-4 md:flex-row md:justify-center">
      <Button
        href="#contact"
        color="blue"
        title="Hire Me"
        class="w-full md:w-auto"
      />
      <ButtonOutline
        href="#download"
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
