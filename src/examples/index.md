---
page: true
title: Samples
aside: false
footer: false
outline: false
---

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    ExampleRepl: defineAsyncComponent({
      loader: () => import('./components/Example.vue'),
    })
  }
}
</script>

<ClientOnly>
  <ExampleRepl />
</ClientOnly>
