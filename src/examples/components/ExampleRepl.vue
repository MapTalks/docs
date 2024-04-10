<script setup lang="ts">
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";
import { watchEffect, toRef } from "vue";
import { onHashChange } from "./utils";

const importMap = {
  imports: {
    maptalks: "https://unpkg.com/maptalks/dist/maptalks.es.js",
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

async function updateExample() {
  let hash = location.hash.slice(1);
  if (!hash) {
    hash = "hello";
    location.hash = `#${hash}`;
  }
  const htmlRes = await fetch(hash + "/index.html");
  const htmlText = await htmlRes.text();
  const cssRes = await fetch(hash + "/index.css");
  const cssText = await cssRes.text();
  store.setFiles(
    {
      "index.css": cssText,
      "index.html": htmlText.replaceAll("{res}", "/examples/resources"),
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
