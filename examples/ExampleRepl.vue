<script setup lang="ts">
import { Repl, useStore, useVueImportMap } from "@vue/repl";
// import type CodeMirror from "@vue/repl/codemirror-editor";
import { ref, watchEffect, onMounted, computed, toRef } from "vue";
import { shallowRef } from "vue";
import { onHashChange } from "../common/utils";
import { data } from "./examples.data";
import CodeMirror from "@vue/repl/codemirror-editor";

const EditorComponent = shallowRef<typeof CodeMirror>();

const { vueVersion, defaultVersion } = useVueImportMap();

const importMap = {
  imports: {
    maptalks: "https://unpkg.com/maptalks/dist/maptalks.es.js",
    "gl-layers":
      "https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js",
  },
};

const store = useStore({
  vueVersion,
  builtinImportMap: toRef(importMap),
});

import("@vue/repl/codemirror-editor").then(
  (mod) => (EditorComponent.value = mod.default)
);

const replRef = ref<InstanceType<typeof Repl>>();

const setVH = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight + `px`);
};
window.addEventListener("resize", setVH);
setVH();

let currentHash = ref("hello");

watchEffect(updateExample, {
  onTrigger(e) {
    console.log(e);
    debugger;
  },
});
onHashChange(updateExample);
/**
 * We perform some runtime logic to transform source files into different
 * API / format combinations:
 * - Options vs. Composition
 * - plain HTML vs. SFCs
 */
async function updateExample() {
  let hash = location.hash.slice(1);
  if (!hash) {
    hash = "hello";
    location.hash = `#${hash}`;
  }
  const htmlRes = await fetch("./" + hash + "/index.html");
  const htmlText = await htmlRes.text();
  const cssRes = await fetch("./" + hash + "/index.css");
  const cssText = await cssRes.text();
  const jsRes = await fetch("./" + hash + "/index.js");
  const jsText = await jsRes.text();
  store.setFiles(
    { "index.js": jsText, "index.css": cssText, "index.html": htmlText },
    "index.html"
  );

  currentHash.value = hash;
}

const theme = ref<"dark" | "light">("dark");
function toggleTheme(isDark: boolean) {
  theme.value = isDark ? "dark" : "light";
}
onMounted(() => {
  const cls = document.documentElement.classList;
  toggleTheme(cls.contains("dark"));
});
</script>

<template>
  <section class="examples">
    <Repl
      layout="vertical"
      ref="replRef"
      :clearConsole="false"
      :editor="CodeMirror"
      :layoutReverse="true"
      :store="store"
      :showCompileOutput="false"
      :showImportMap="false"
      :showTsConfig="false"
    />
  </section>
</template>

<style>
.dark {
  color-scheme: dark;
}

.examples {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  --height: calc(100vh - var(--vt-nav-height) - var(--vt-banner-height, 0px));
}

.instruction {
  width: 45%;
  height: var(--height);
  padding: 0 32px 24px;
  border-right: 1px solid var(--vt-c-divider-light);
  font-size: 15px;
  overflow-y: auto;
  position: relative;
  --vt-nav-height: 40px;
}

.vue-repl {
  width: 100%;
  height: 100%;
}

.vue-repl .output-container {
  height: 600px;
}

.vue-repl .editor-container {
  height: 600px;
}

.vt-doc :deep(h1) {
  font-size: 1.4em;
  margin: 1em 0;
}

.vt-doc :deep(h2) {
  font-size: 1.1em;
  margin: 1.2em 0 0.5em;
  padding: 0;
  border-top: none;
}

.vt-doc :deep(.header-anchor) {
  display: none;
}

.vt-doc :deep(summary) {
  cursor: pointer;
}

button {
  background-color: var(--vt-c-brand);
  color: var(--vt-c-bg);
  padding: 4px 12px 3px;
  border-radius: 0;
  font-weight: 600;
  font-size: 14px;
}

@media (min-width: 1377px) {
  .vue-repl {
    border-right: 1px solid var(--vt-c-divider-light);
  }
}

@media (min-width: 1441px) {
  .examples {
    padding-right: 32px;
  }
}

:deep(.narrow) {
  display: none;
}

@media (max-width: 720px) {
  .examples {
    display: block;
  }
  .instruction {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--vt-c-divider-light);
    height: 30vh;
    padding: 0 24px 24px;
  }
  .vue-repl {
    width: 100%;
    height: calc(70vh - var(--vt-nav-height) - var(--vt-banner-height, 0px));
  }
  :deep(.wide) {
    display: none;
  }
  :deep(.narrow) {
    display: inline;
  }
}
</style>
