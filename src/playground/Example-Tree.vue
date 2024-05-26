<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, defineProps } from "vue";



const props = defineProps({
    data: {
        type: Array<any>,
        required: true
    }
});


const openTree = (item: any) => {
    item.open = !item.open;
}

</script>

<script lang="ts">
export default {
    name: 'Example-Tree'
}
</script>

<template>
    <ul ref="dropdown" class="example-item" :class="{ 'example-group': item.isGroup }"
        v-for="(item, index) in props.data">
        <li>
            <span v-if="item.isGroup" @click="openTree(item)">
                <el-icon v-if="item.open">
                    <FolderOpened />
                </el-icon>
                <el-icon v-if="!item.open">
                    <Folder />
                </el-icon>
                {{ item.label }}
            </span>
            <a v-if="!item.isGroup" :href="item.hash" :id="item.id">
                {{ item.label }}
            </a>
            <Example-Tree v-if="item.open" :data="item.children"></Example-Tree>
        </li>
    </ul>

</template>
<style scoped>
.example-item {
    cursor: pointer;
    margin-left: 15px;
}
</style>
<style></style>
