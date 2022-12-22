<template>
  <a
    :class="`border-${props.color}-500`"
    class="group relative inline-flex border focus:outline-none md:w-full"
    :href="props.href"
  >
    <span
      class="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-blue-500 ring-1 ring-blue-500 ring-offset-1 ring-offset-blue-500 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1"
    >
      {{ props.title }}
    </span>
  </a>
</template>

<script setup>
const props = defineProps(["href", "title", "color"]);
</script>
