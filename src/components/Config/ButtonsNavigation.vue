<script setup>
import {ref} from 'vue'
import {data, activatedOn} from '@/utils/config'
const emits = defineEmits([
    'goSection'
])

</script>
<template>
     <nav class="box-nav-buttons">
        <button v-for="(item, index) in data" :key="index" @click="activatedOn(index, data)" :class="{active: item.isActive}">{{item.title}}</button>
    </nav>
</template>