<script setup lang="ts">
import { ref } from "vue";
// import ExampleRepl from "./ExampleRepl.vue";
import ThumbList from "./ExampleThumb.vue";
import { onHashChange } from "./utils";

const hash = ref(location.hash.slice(1));

onHashChange(() => (hash.value = location.hash.slice(1)));
</script>

<template>
  <ExampleRepl v-if="hash.includes('/')" />
  <ThumbList v-else />
</template>
