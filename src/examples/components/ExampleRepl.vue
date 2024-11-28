<script setup lang="ts">
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";
import { watchEffect, toRef, ref } from "vue";
import { onHashChange } from "./utils";
import { data } from "./examples.data";
import {
  SaveOutlined,
  ReloadOutlined,
  ShareAltOutlined,
  DownloadOutlined,
} from "@ant-design/icons-vue";
import { ElMessage } from "element-plus";

const replRef = ref<InstanceType<typeof Repl>>();

const loading = ref(false);

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
  const htmlText = (data[hash]["index.html"] as string).replaceAll(
    "{res}",
    "/examples/resources",
  );
  const cssText = data[hash]["index.css"] as string;
  store.setFiles(
    {
      "index.html": htmlText,
      "index.css": cssText,
    },
    "index.html",
  );
}

function savePage() {
  loading.value = true;
  setTimeout(() => {
    ElMessage.success(`示例修改成功, 已创建 pr: basic/map/load`);
    loading.value = false;
  }, 2000);
}

function reloadPage() {
  replRef.value?.reload();
}

async function copyLink() {
  await navigator.clipboard.writeText(window.location.href);
  ElMessage.success("分享链接已经复制到剪切板。");
}
</script>

<template>
  <div class="examples-action-icons">
    <el-tooltip content="保存">
      <SaveOutlined :style="{ marginRight: '12px' }" @click="savePage" />
    </el-tooltip>
    <el-tooltip content="刷新">
      <ReloadOutlined :style="{ marginRight: '12px' }" @click="reloadPage" />
    </el-tooltip>
    <el-tooltip content="复制分享链接">
      <ShareAltOutlined :style="{ marginRight: '12px' }" @click="copyLink" />
    </el-tooltip>
    <el-tooltip content="打包下载项目">
      <el-popconfirm
        title="确认打包下载项目文件?"
        confirm-button-text="确定"
        cancel-button-text="取消"
      >
        <template #reference>
          <DownloadOutlined :style="{ color: '#42b883' }" /></template
      ></el-popconfirm>
    </el-tooltip>
    <el-link
      href="https://github.com/aurorafe/mtk-playground/tree/main"
      target="_blank"
      rel="noopener noreferrer"
      title="View on GitHub"
      class="ml-10px"
    >
      <span class="i-ant-design:github-outlined w-1.5em h-1.5em"></span>
    </el-link>
  </div>
  <div class="examples-repl-page" v-loading="loading">
    <Repl
      ref="replRef"
      :editor="CodeMirror"
      :store="store"
      :showCompileOutput="false"
      :showImportMap="false"
      :showTsConfig="false"
      :clearConsole="false"
    />
  </div>
</template>

<style>
.examples-action-icons {
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 1;
  .anticon {
    color: #42b883;
    cursor: pointer;
  }
}

.examples-repl-page {
  padding: 5px 0 0 20px;
}

.vue-repl {
  height: calc(100vh - 70px);
}
</style>
