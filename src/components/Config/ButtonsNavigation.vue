<script setup>
import {ref} from 'vue'
const emits = defineEmits([
    'goSection'
])

const data = ref([
    {title: 'Site config', isActive: false},
    {title: 'Account config', isActive: false},
    {title: 'Family config', isActive: false}
])

function activatedOn(index) {
    data.value.forEach((item)=> item.isActive = false)
    data.value[index].isActive = true
}
</script>
<template>
     <nav class="box-nav-buttons">
        <button v-for="(item, index) in data" :key="index" @click="activatedOn(index)" :class="{active: item.isActive}">{{item.title}}</button>
    </nav>
</template>