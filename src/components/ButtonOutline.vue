<template>
  <a
    class="group relative inline-flex border border-blue-600 focus:outline-none w-full sm:w-auto"
    :href="props.href"
  >
    <span
      class="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-blue-500 text-center font-bold uppercase bg-gray-900 ring-1 ring-blue-600 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1"
    >
      {{ props.title }}
    </span>
  </a>
</template>

<script setup>
const props = defineProps(["title", "color", "href"]);
</script>
