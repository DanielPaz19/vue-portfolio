<template>
  <div
    class="transition ease-in-out duration-200 bg-gray-800 md:bg-transparent py-4 absolute md:static w-screen md:scale-100"
    :class="{ 'scale-0': props.openMenu === false }"
  >
    <ul
      class="text-light text-lg flex flex-col md:flex-row gap-1 md:gap-5 pl-5 md:justify-end md:items-center"
    >
      <li class="hover:text-gray-500 font-extralight">
        <a href="#home">Home</a>
      </li>
      <li class="hover:text-gray-500 font-extralight">
        <a href="#about">About Me</a>
      </li>
      <li class="hover:text-gray-500 font-extralight">
        <a href="#portfolio">Porfolio</a>
      </li>
      <li class="hover:text-gray-500 font-extralight">
        <a href="#certificatons">Certifications</a>
      </li>
      <li class="hover:text-gray-500 font-extralight">
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <div class="mt-2">
          <Button href="#contact" color="blue" title="Contact Me" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
const props = defineProps(["openMenu"]);
</script>
