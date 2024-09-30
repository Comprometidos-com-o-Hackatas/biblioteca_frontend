<script setup>
import { ref } from 'vue';
const search = ref('')

const props = defineProps({
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String
    },
    sizeIcon: {
        type: String,
        default: '20px'
    }
})
</script>
<template>
    <div class="search-container" :style="[props.width, props.height]">
        <div class="search-box">
            <input v-model="search" @input="$emit('filter', search)"/>
            <i class="mdi mdi-magnify" :style="props.sizeIcon + 'px'" />
        </div>
    </div>
</template>
