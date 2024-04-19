<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from "vue";
import Split from 'split.js';
import loader from '@monaco-editor/loader';
import { ElMessage } from 'element-plus'
import { format } from 'prettier';
import HTMLPlugin from 'prettier/plugins/html';
import BabelPlugin from 'prettier/plugins/babel';
import PostCssPlugin from 'prettier/plugins/postcss';
import AcornPlugin from 'prettier/plugins/acorn';
import ESTreePlugin from 'prettier/plugins/estree';

import { getCode, createShareUrl, getExtraLibs } from './code';

const editorRef = ref('editorRef');
const previewRef = ref('previewRef');
const toolRef = ref('toolRef');

const state = reactive({
    size: 'small',
    loaded: false,
    isDark: false,
    libDialogShow: false,
    imageDialogShow: false,
    libList: getExtraLibs().libs,
    pluginList: getExtraLibs().plugins
})


let editor: any;

const prettierOptions = {
    tabWidth: 4
}

const getWholeRange = () => {
    const model = editor.getModel();
    const linesNumber = model.getLineCount();
    const range = {
        startLineNumber: 1,
        endLineNumber: linesNumber,
        startColumn: 1,
        endColumn: 100000
    };
    return [range];

}

const bindPrettier = (monaco) => {
    editor.addAction({
        id: '', // 菜单项 id
        label: 'Format Code', // 菜单项名称
        keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF],
        contextMenuGroupId: '9_cutcopypaste', // 所属菜单的分组
        run: () => {
            format(editor.getValue(), Object.assign({}, prettierOptions, {
                parser: 'html',
                plugins: [HTMLPlugin, PostCssPlugin, AcornPlugin, ESTreePlugin, BabelPlugin]
            })).then(text => {
                const [range] = getWholeRange();
                editor.executeEdits('', [
                    {
                        range,
                        text
                    }
                ]);
            });
        }
    });
}

const createEditor = (monaco) => {
    // https://microsoft.github.io/monaco-editor/
    editor = monaco.editor.create(editorRef.value, {
        value: '<h1>hello world</h1>',
        language: 'html',
        // theme: 'vs-dark',
        automaticLayout: true
    });
    bindPrettier(monaco);
    const code = getCode();
    if (code) {
        editor.setValue(code);
        setTimeout(() => {
            runCode();
        }, 500);
    }
}

const clipboardText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        ElMessage.success('Copy Successful');
    }).catch(error => {
        ElMessage.error('copy error');
        console.error(error);
    })
}

const runCode = () => {
    if (!editor || !previewRef || !previewRef.value) {
        ElMessage.error('editor not created');
        return;
    }
    const value = editor.getValue();
    const blob = new Blob([value], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    (previewRef.value as any).src = url
}

const copyCode = () => {
    if (!editor) {
        ElMessage.error('editor not created');
        return;
    }
    const value = editor.getValue();
    if (!value) {
        return;
    }
    clipboardText(value);
}

const shareUrl = () => {
    if (!editor) {
        ElMessage.error('editor not created');
        return;
    }
    const value = editor.getValue();
    if (!value) {
        return;
    }
    const url = createShareUrl(value);
    clipboardText(url);
}

let rAFId: number;
let currentTheme = 'vs';
const checkTheme = () => {
    if (editor) {
        const htmlElement = document.body.parentElement;
        if (htmlElement) {
            const isDark = htmlElement.classList.contains('dark');
            const theme = isDark ? 'vs-dark' : 'vs';
            state.isDark = isDark;
            if (theme !== currentTheme) {
                editor.updateOptions({ theme });
                currentTheme = theme;
            }
        }
    }
    if (!state.loaded) {
        state.loaded = true;
    }

    rAFId = requestAnimationFrame(checkTheme);
}

onMounted(() => {
    Split(['#editor-panel', '#preview-panel']);
    // https://github.com/suren-atoyan/monaco-loader
    loader.config({
        paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' }
    });
    loader.init().then((monaco) => {
        createEditor(monaco);
        rAFId = requestAnimationFrame(checkTheme);
    }).catch(() => {
        ElMessage.error('load monaco editor error');
    })
})

onUnmounted(() => {
    if (editor) {
        console.log('dispose editor');
        editor.dispose();
    }
    if (rAFId) {
        cancelAnimationFrame(rAFId);
    }
})

</script>

<template>
    <div class="editor-container">
        <div id="editor-panel" class="editor-panel panel">
            <div v-if="state.loaded" ref="toolRef" class="tools" :class="{ 'tools-dark': state.isDark }">
                <button class="button" @click="runCode">Run</button>
                <button class="button" @click="copyCode">Copy</button>
                <button class="button" @click="shareUrl">Share</button>
                <button class="button" @click="state.libDialogShow = true">Libs</button>
                <button class="button">
                    <a href="https://www.base64encoder.io/image-to-base64-converter/" target="_blank">Image to Base64</a>
                </button>
            </div>
            <div ref="editorRef" class="editor-main"></div>
        </div>
        <div id="preview-panel" class="preview-panel panel">
            <iframe ref="previewRef" class="preview-result"></iframe>
        </div>
        <el-dialog v-model="state.libDialogShow" title="Some libs CDN URL" width="800">
            <!-- <span>Common Libs</span> -->
            <el-divider content-position="left">Maptalks Plugins</el-divider>
            <div v-for="item in state.pluginList" class="flex row">
                <div class="label">{{ item.name }}</div>
                <div class="value">
                    <el-input v-model="item.url" :size="state.size" style="width: 540px" disabled
                        placeholder="Please input" />
                    <button class="button" @click="clipboardText(item.url)">Copy</button>
                </div>
            </div>
            <el-divider content-position="left">Common Libs</el-divider>
            <div v-for="item in state.libList" class="flex row">
                <div class="label">{{ item.name }}</div>
                <div class="value">
                    <el-input v-model="item.url" :size="state.size" style="width: 540px" disabled
                        placeholder="Please input" />
                    <button class="button" @click="clipboardText(item.url)">Copy</button>
                </div>
            </div>


        </el-dialog>
    </div>
</template>
<style scoped>
.flex {
    display: flex;
}

.editor-container {
    width: 100%;
    min-height: 900px;
    height: 900px;

    /* background-color: black; */
    display: flex;
}

.panel {
    width: 50%;
    height: 100%;
}

.tools {
    height: 30px;
    border-bottom: 1px solid #e9e9e9;
    text-align: right;

}

.editor-main {
    height: calc(100% - 30px);
}

.preview-result {
    width: 100%;
    height: 100%;
    border: none;
}

.button {
    background-color: var(--vp-c-brand-1);
    color: white;
    margin-left: 10px;
    padding: 0px 5px;
}

.row .label {
    width: 160px;
}
</style>
<style>
.tools-dark {
    border-bottom: 1px solid black !important;
}

.split {
    display: flex;
    flex-direction: row;
}

.gutter {
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: 50%;
}

.gutter.gutter-horizontal {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    cursor: col-resize;
}
</style>
