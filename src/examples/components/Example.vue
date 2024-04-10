<script setup lang="ts">
import ExampleRepl from "./ExampleRepl.vue";
import ThumbList from "./ExampleThumb.vue";

const hash = location.hash.slice(1);
</script>

<template>
  <ExampleRepl v-if="hash.includes('/')" />
  <ThumbList v-else />
</template>
