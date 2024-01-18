<script setup lang="ts">
import { Repl, ReplStore } from '@vue/repl'
import type CodeMirror from '@vue/repl/codemirror-editor'
import { ref, watchEffect, onMounted, computed } from 'vue'
import { shallowRef } from 'vue'
import { onHashChange } from '../common/utils.ts'
import { data } from './examples.data'

const EditorComponent = shallowRef<typeof CodeMirror>()

import('@vue/repl/codemirror-editor').then(
  mod => (EditorComponent.value = mod.default),
)

const replRef = ref<InstanceType<typeof Repl>>()

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`)
}
window.addEventListener('resize', setVH)
setVH()

const useProdMode = ref(false)

const store = new ReplStore({
  productionMode: useProdMode.value,
  defaultVueRuntimeURL: import.meta.env.PROD
    ? `${location.origin}/vue.runtime.esm-browser.js`
    : `${location.origin}/src/vue-dev-proxy`,
  defaultVueRuntimeProdURL: import.meta.env.PROD
    ? `${location.origin}/vue.runtime.esm-browser.prod.js`
    : `${location.origin}/src/vue-dev-proxy-prod`,
  defaultVueServerRendererURL: import.meta.env.PROD
    ? `${location.origin}/server-renderer.esm-browser.js`
    : `${location.origin}/src/vue-server-renderer-dev-proxy`,
})

let currentHash = ref('hello')
const descriptionContent = computed(() => {
  return data[currentHash.value]?.['description.md'] || `<html><body>hi</body></html>`
})

watchEffect(updateExample, {
  onTrigger(e) {
    console.log(e)
    debugger
  }
})
onHashChange(updateExample)
/**
 * We perform some runtime logic to transform source files into different
 * API / format combinations:
 * - Options vs. Composition
 * - plain HTML vs. SFCs
 */
function updateExample() {
  let hash = location.hash.slice(1)
  if (!hash) {
    hash = 'hello'
    location.hash = `#${hash}`
  }
  fetch('./' + hash + '/index.html').then(response => response.text()).then(text => {
    store.setFiles({ 'index.html': text }, 'index.html')
  })
  currentHash.value = hash
}



const theme = ref<'dark' | 'light'>('dark')
function toggleTheme(isDark: boolean) {
  theme.value = isDark ? 'dark' : 'light'
}
onMounted(() => {
  const cls = document.documentElement.classList
  toggleTheme(cls.contains('dark'))

})
</script>

<template>
  <section class="examples">
    <article class="instruction" ref="instruction">
      <div class="vt-doc" v-html="descriptionContent"></div>
    </article>
    <Repl
      v-if="EditorComponent"
      layout="vertical"
      :layoutReverse="false"
      ref="replRef"
      :theme="theme"
      :editor="EditorComponent"
      @keydown.ctrl.s.prevent
      @keydown.meta.s.prevent

      :store="store"
      :showCompileOutput="false"
      :showImportMap="false"
      :showTsConfig="false"
      :autoResize="true"

      :clearConsole="false"

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
  --height: calc(
    100vh - var(--vt-nav-height) - var(--vt-banner-height, 0px)
  );
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
  width: 55%;
  height: var(--height);
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
  border-radius: 8px;
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
    height: calc(
      70vh - var(--vt-nav-height) - var(--vt-banner-height, 0px)
    );
  }
  :deep(.wide) {
    display: none;
  }
  :deep(.narrow) {
    display: inline;
  }
}
</style>
