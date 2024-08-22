<template>
    <div class="search-container">
        <div class="search-box">
            <input v-model="search" @input="$emit('filter', search)"/>
            <i class="mdi mdi-magnify"/>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const search = ref(null)
</script>