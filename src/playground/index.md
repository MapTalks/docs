---
page: true
title: PlayGround
layout: page
aside: false
footer: false
outline: false
---

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    ExampleRepl: defineAsyncComponent({
      loader: () => import('./Editor.vue'),
    })
  }
}
</script>

<ClientOnly>
  <ExampleRepl />
</ClientOnly>
