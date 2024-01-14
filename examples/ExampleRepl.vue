<script setup lang="ts">
import { Repl, ReplStore } from '@vue/repl'
import type CodeMirror from '@vue/repl/codemirror-editor'
import { ref, watchEffect, onMounted } from 'vue'
import { shallowRef } from 'vue'
import { onHashChange } from '../common/utils.ts'

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

watchEffect(updateExample, {
  onTrigger(e) {
    console.log(e)
    debugger
  }
})
// onHashChange(updateExample)
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
</template>

<style>
.dark {
  color-scheme: dark;
}

body {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  --base: #444;
  --nav-height: 50px;
}

.vue-repl {
  height: calc(var(--vh) - var(--nav-height)) !important;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}
</style>
