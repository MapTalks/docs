---
page: true
layout: home
aside: false
footer: false
outline: false
---

<script setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('');

const search = location.search

const params = search.split("origin=")[1]

fetch(`./${params}?raw`).then((res) => {
  res.text().then((a) => {
    text.value = a
  })
})

const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        console.log(file)
        callback([{
          url: `./${file.name}`,
          alt: 'alt',
        }])

      });
    })
  );
}

</script>

<ClientOnly>
  <MdEditor v-model="text"  pageFullscreen  :preview="false"    @onUploadImg="onUploadImg" />
</ClientOnly>

<style>
svg.md-editor-icon {
  width: 24px;
  height: 24px;
}

.md-editor .lucide-list-icon,
.md-editor .lucide-list-ordered-icon,
.md-editor .lucide-list-todo-icon {
  width: 24px;
  height: 24px;
}

ul.md-editor-menu {
  padding: 0;
}
</style>
