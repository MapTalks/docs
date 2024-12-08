---
hello: world
---

<script setup>
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import md from "./add-layer.md?raw"


const text = ref('Hello Editor!');
const text2 = ref('./add-layer.md');
</script>

<MdEditor v-model="md" />

<!--@include: {{text2}}-->
