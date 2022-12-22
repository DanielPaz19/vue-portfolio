<template>
  <a
    class="group relative inline-flex border border-blue-500 focus:outline-none"
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
const props = defineProps({
  href: String,
  color: String,
  title: String,
});
</script>
