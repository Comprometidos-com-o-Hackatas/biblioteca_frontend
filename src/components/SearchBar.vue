<script setup>
import { ref } from 'vue';
const search = ref(null)

const props = defineProps({
    width: {
        type: Number,
        default: '100'
    },
    sizeIcon: {
        type: Number,
        default: '20'
    }
})
</script>
<template>
    <div class="search-container" :style="props.width + '%'">
        <div class="search-box">
            <input v-model="search" @input="$emit('filter', search)"/>
            <i class="mdi mdi-magnify" :style="props.sizeIcon + 'px'" />
        </div>
    </div>
</template>
