<script setup lang="ts">
import examplesZh from "../../../.vitepress/config/examples/zh";

function getSrc(hash: string) {
  return `/thumbnails/${hash.slice(1).replaceAll("/", "_")}.webp`;
}
</script>

<template>
  <div class="thumbs">
    <div v-for="exampleI in examplesZh[0].items" :key="exampleI.text">
      <div class="title">{{ exampleI.text }}</div>
      <el-row :gutter="28">
        <el-col
          v-for="exampleJ in exampleI.items"
          class="col"
          :sm="12"
          :md="8"
          :lg="6"
        >
          <div class="card">
            <img width="100%" :src="getSrc(exampleJ.link!)" /><span
              class="text"
            >
              <div class="circle" />
              <span class="name" :title="exampleJ.text">{{
                exampleJ.text
              }}</span>
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.thumbs {
  padding: 10px 10px 0 10px;
  color: #333;
}

.title {
  margin-bottom: 10px;
  line-height: 40px;
  color: #666666;
  border-bottom: 1px solid #ddd;
}

.col {
  margin-bottom: 24px;
}

.card {
  background-color: #eeeeee;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.text {
  display: flex;
  align-items: center;
  margin-left: 13px;
  line-height: 30px;
  font-size: 12px;
}

.name {
  max-width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.circle {
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 8px;
  background-color: #666666;
  border-radius: 50%;
}
</style>
