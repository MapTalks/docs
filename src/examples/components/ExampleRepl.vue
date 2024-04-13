<script setup lang="ts">
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";
import { watchEffect, toRef } from "vue";
import { onHashChange } from "./utils";
import { data } from "./examples.data";

const importMap = {
  imports: {
    maptalks: "https://unpkg.com/maptalks/dist/maptalks.es.js",
    draco: "https://maptalks.com/api/transcoders.draco.js",
    proj4: "https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.11.0/proj4.js",
    "gl-layers":
      "https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js",
    "mt.gui": "/lib/mt.gui.js",
  },
};

const store = useStore({
  builtinImportMap: toRef(importMap),
});

watchEffect(updateExample, {
  onTrigger() {
    debugger;
  },
});

onHashChange(updateExample);

function updateExample() {
  let hash = location.hash.slice(1);
  if (!hash.includes("/")) {
    return;
  }
  const htmlText = data[hash]["index.html"].replaceAll(
    "{res}",
    "/examples/resources"
  );
  const cssText = data[hash]["index.css"];
  store.setFiles(
    {
      "index.html": htmlText,
      "index.css": cssText,
    },
    "index.html"
  );
}
</script>

<template>
  <div class="examples-repl-page">
    <Repl
      layout="vertical"
      :editor="CodeMirror"
      :store="store"
      :layoutReverse="true"
      :showCompileOutput="false"
      :showImportMap="false"
      :showTsConfig="false"
      :clearConsole="false"
    />
  </div>
</template>

<style>
.examples-repl-page {
  padding: 5px 0 40px 20px;
}

.vue-repl .output-container {
  height: 600px;
}

.vue-repl .editor-container {
  height: 600px;
}
</style>
