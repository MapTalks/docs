<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from "vue";
import Split from 'split.js';
import loader from '@monaco-editor/loader';
import { ElMessage } from 'element-plus'
import { saveAs } from 'file-saver';
import { format } from 'prettier';
import HTMLPlugin from 'prettier/plugins/html';
import BabelPlugin from 'prettier/plugins/babel';
import PostCssPlugin from 'prettier/plugins/postcss';
import AcornPlugin from 'prettier/plugins/acorn';
import ESTreePlugin from 'prettier/plugins/estree';

import { getCode, createShareUrl, generateHTMLCode, getExtraLibs } from './code';


const editorJSRef = ref('editorJSRef');
const editorHTMLRef = ref('editorHTMLRef');
const editorCSSRef = ref('editorCSSRef');
const previewRef = ref('previewRef');

const state = reactive({
    loading: false,
    size: 'small',
    loaded: false,
    isDark: false,
    libDialogShow: false,
    imageDialogShow: false,
    libList: getExtraLibs().libs,
    pluginList: getExtraLibs().plugins
})


let editorJS: any;
let editorHTML: any;
let editorCSS: any;
let editors: any[] = [];

const prettierOptions = {
    tabWidth: 4
}

const getWholeRange = (editor: any) => {
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

const bindPrettier = (monaco: any) => {
    editors.forEach(editor => {
        editor.addAction({
            id: '', // 菜单项 id
            label: 'Prettier Format Code', // 菜单项名称
            keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF],
            contextMenuGroupId: '9_cutcopypaste', // 所属菜单的分组
            run: () => {
                const language = editor.getModel().getLanguageId();
                // console.log(editor.getModel().getLanguageId());
                format(editor.getValue(), Object.assign({}, prettierOptions, {
                    parser: language === 'javascript' ? 'babel' : language,
                    plugins: [HTMLPlugin, PostCssPlugin, AcornPlugin, ESTreePlugin, BabelPlugin]
                })).then(text => {
                    const [range] = getWholeRange(editor);
                    editor.executeEdits('', [
                        {
                            range,
                            text
                        }
                    ]);
                });
            }
        });
    });
}

const createEditor = (monaco: any) => {
    // https://microsoft.github.io/monaco-editor/
    const editorOptions = {
        minimap: {
            autohide: true
        },
        value: '',
        // theme: 'vs-dark',
        automaticLayout: true
    }
    editorJS = monaco.editor.create(editorJSRef.value, Object.assign({}, editorOptions, {
        language: 'javascript',
    }));
    editorHTML = monaco.editor.create(editorHTMLRef.value, Object.assign({}, editorOptions, {
        language: 'html',
    }));
    editorCSS = monaco.editor.create(editorCSSRef.value, Object.assign({}, editorOptions, {
        language: 'css',
    }));
    editors = [editorJS, editorHTML, editorCSS];
    bindPrettier(monaco);
    const result = getCode();
    if (result) {
        editorJS.setValue(result.jsCode);
        editorHTML.setValue(result.htmlCode);
        editorCSS.setValue(result.cssCode);
        setTimeout(() => {
            runCode();
        }, 500);
    }
}

const clipboardText = (text: string, message?: string) => {
    navigator.clipboard.writeText(text).then(() => {
        ElMessage.success(message || 'Copy Successful');
    }).catch(error => {
        ElMessage.error('copy error');
        console.error(error);
    })
}

const getEditorCodes = () => {
    const jsCode = editorJS.getValue();
    const htmlCode = editorHTML.getValue();
    const cssCode = editorCSS.getValue();
    return { jsCode, htmlCode, cssCode };
}

const runCode = () => {
    if (!editors.length || !previewRef || !previewRef.value) {
        ElMessage.error('editor not created');
        return;
    }
    const { jsCode, htmlCode, cssCode } = getEditorCodes();
    const code = generateHTMLCode(jsCode, htmlCode, cssCode);
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    (previewRef.value as any).src = url
}

const copyCode = () => {
    if (!editors.length) {
        ElMessage.error('editor not created');
        return;
    }
    const { jsCode, htmlCode, cssCode } = getEditorCodes();
    const code = generateHTMLCode(jsCode, htmlCode, cssCode);
    clipboardText(code,'Copy Code Successful');
}

const shareUrl = () => {
    if (!editors.length) {
        ElMessage.error('editor not created');
        return;
    }
    const { jsCode, htmlCode, cssCode } = getEditorCodes();
    const url = createShareUrl(jsCode, htmlCode, cssCode);
    clipboardText(url, 'Copy Share URL Successful');
}

const downloadCode = () => {
    if (!editors.length) {
        ElMessage.error('editor not created');
        return;
    }
    const { jsCode, htmlCode, cssCode } = getEditorCodes();
    const code = generateHTMLCode(jsCode, htmlCode, cssCode);
    const blob = new Blob([code], { type: 'text/html' });
    saveAs(blob, `maptalks-playground-${new Date().getTime()}.html`);
}

let rAFId: number;
let currentTheme = 'vs';
const checkTheme = () => {
    if (editors.length) {
        const htmlElement = document.body.parentElement;
        if (htmlElement) {
            const isDark = htmlElement.classList.contains('dark');
            const theme = isDark ? 'vs-dark' : 'vs';
            state.isDark = isDark;
            if (theme !== currentTheme) {
                editors.forEach(editor => {
                    editor.updateOptions({ theme });
                })
                currentTheme = theme;
            }
        }
    }
    if (!state.loaded) {
        state.loaded = true;
    }
    rAFId = requestAnimationFrame(checkTheme);
}

const loadDTS = (monaco: any) => {
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        allowJs: true,
        allowNonTsExtensions: true,
        checkJs: true,
        strict: true,
        alwaysStrict: true,
        // lib: ['example.d.ts'],
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        esModuleInterop: true,
        noEmit: true,
        noImplicitAny: true
    });
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false
    })
    fetch(`/lib/maptalks.d.ts.json?t=${new Date().getTime()}`).then(res => res.json()).then(json => {
        type Item = { path: string, content: string };
        json.forEach((item: Item) => {
            if (!item.path || !item.content) {
                return;
            }
            var libUri = `file:///node_modules/@types/maptalks/${item.path}`;
            if (libUri.includes('maptalks/index.d.ts')) {
                item.content += '\n export as namespace maptalks';
                console.log(item.content);
            }

            monaco.languages.typescript.javascriptDefaults.addExtraLib(item.content, libUri);
            // monaco.editor.createModel(item.content, "typescript", monaco.Uri.parse(libUri));
        });
        state.loading = false;

    }).catch(error => {
        ElMessage.error('load maptalks d.ts error');
        console.error(error)
        state.loading = false;
    })
}

onMounted(() => {
    Split(['#editor-panel', '#preview-panel']);
    // Split(['#editor-js', '#editor-html', '#editor-css']);
    // https://github.com/suren-atoyan/monaco-loader
    loader.config({
        paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' }
    });
    state.loading = true;
    loader.init().then((monaco) => {
        loadDTS(monaco);
        createEditor(monaco);
        rAFId = requestAnimationFrame(checkTheme);
    }).catch(() => {
        state.loading = false;
        ElMessage.error('load monaco editor error');
    })
})

onUnmounted(() => {
    if (editors) {
        console.log('dispose editor');
        editors.forEach(editor => {
            editor.dispose();
        })
    }
    if (rAFId) {
        cancelAnimationFrame(rAFId);
    }
})

</script>

<template>
    <div class="editor-container">
        <div id="editor-panel" class="editor-panel panel" v-loading="state.loading"
            element-loading-text="Loading editor and d.ts files">
            <div class="editor-item editor-middle">
                <div v-if="state.loaded" class="tools" :class="{ 'tools-dark': state.isDark }">
                    <span class="title">JavaScript</span>
                    <button class="button" @click="runCode">Run</button>
                    <button class="button" @click="copyCode">Copy</button>
                    <button class="button" @click="shareUrl">Share</button>
                    <button class="button" @click="downloadCode">Download</button>
                    <button class="button" @click="state.libDialogShow = true">Libs</button>
                    <button class="button">
                        <a href="https://www.base64encoder.io/image-to-base64-converter/" target="_blank">Image to
                            Base64</a>
                    </button>
                </div>
                <div ref="editorJSRef" class="editor editor-js" id="editor-js"></div>
            </div>
            <div class="editor-item editor-small">
                <div v-if="state.loaded" class="tools" :class="{ 'tools-dark': state.isDark }">
                    <span class="title">HTML</span>
                </div>
                <div ref="editorHTMLRef" class="editor editor-html" id="editor-html"></div>
            </div>
            <div class="editor-item  editor-small">
                <div v-if="state.loaded" class="tools" :class="{ 'tools-dark': state.isDark }">
                    <span class="title">CSS</span>
                </div>
                <div ref="editorCSSRef" class="editor editor-css" id="editor-css"></div>
            </div>
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


.editor-middle {
    height: 60%;
}

.editor-small {
    height: 20%;
}

.tools {
    padding-left: 10px;
    height: 30px;
    border-bottom: 1px solid #e9e9e9;
    border-top: 1px solid #e9e9e9;
    text-align: right;

}

.tools .title {
    float: left;
}

.editor {
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
    border-top: 1px solid black !important;
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
