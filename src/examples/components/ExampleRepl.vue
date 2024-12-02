<script setup lang="ts">
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";
import { watchEffect, toRef, ref, reactive } from "vue";
import { onHashChange } from "./utils";
import { data } from "./examples.data";
import html2canvas from "html2canvas";
import {
  SaveOutlined,
  ReloadOutlined,
  ShareAltOutlined,
  DownloadOutlined,
  FolderAddOutlined,
} from "@ant-design/icons-vue";
import { ElMessage } from "element-plus";

const replRef = ref<InstanceType<typeof Repl>>();

const loading = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

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
    "/examples/resources"
  );
  const cssText = data[hash]["index.css"] as string;
  store.setFiles(
    {
      "index.html": htmlText,
      "index.css": cssText,
    },
    "index.html"
  );
}

function savePage() {
  loading.value = true;
  dialogFormVisible.value = false;
  setTimeout(() => {
    ElMessage.success(`示例修改成功, 已创建 pr: basic/map/load`);
    loading.value = false;
  }, 2000);
}

function reloadPage() {
  replRef.value?.reload();
}

async function copyLink() {
  const iframeWindow = (
    document.querySelector(".iframe-container iframe") as any
  ).contentWindow;
  console.log(iframeWindow.document.body);
  html2canvas(iframeWindow.document.body).then(function (canvas) {
    const url = canvas.toDataURL("image/webp")
    console.log(url)
  });
  await navigator.clipboard.writeText(window.location.href);
  ElMessage.success("分享链接已经复制到剪切板。");
}
</script>

<template>
  <div class="examples-action-icons">
    <el-tooltip content="保存">
      <el-popconfirm
        title="确认提交当前示例的修改吗?"
        confirm-button-text="确定"
        cancel-button-text="取消"
        @confirm="savePage"
        ><template #reference>
          <SaveOutlined :style="{ marginRight: '12px' }" /></template
      ></el-popconfirm>
    </el-tooltip>
    <el-tooltip content="另存为"
      ><FolderAddOutlined
        :style="{ marginRight: '12px' }"
        @click="dialogFormVisible = true"
      />
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
    <el-dialog
      append-to-body
      v-model="dialogFormVisible"
      :z-index="99"
      title="新增示例"
      width="500"
    >
      <el-form :model="form">
        <el-form-item label="示例名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="选择分类" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择示例所属分类">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="savePage"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
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
