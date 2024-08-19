<script setup>
import {ref} from 'vue'

const data = ref([
    {icon: 'mdi-home', link: '/login', isActive: false},
    {icon: 'mdi-magnify', link: '/', isActive: false},
    {icon: 'mdi-bookmark-outline', link: '#', isActive: false},
    {icon: 'mdi-book-alert', link: '#', isActive: false},
    {icon: 'mdi-human-female-female-child', link: '#', isActive: false},
    {icon: 'mdi-cog', link: '#', isActive: false},
])


</script>
<template>
    <section class="section-header">
        <div class="container-header">
            <div class="main-content">
                <div class="box-photo">
                    <img src="../assets/media/crash.webp">
                </div>
                <ul>
                    <li v-for="(item, index) in data" :key="index"> <router-link class="mdiheader-link" :to="item.link" :class="`mdi ${item.icon} mdiheader`" @click="item.isActive = !item.isActive" ></router-link></li>
                </ul>
                
            </div>
            <div class="config-content">
            </div>
        </div>
        <div class="arrow">
                    <span class="mdi mdi-arrow-right"></span>
        </div>
    </section>
</template>