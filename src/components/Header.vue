<script setup>
import router from '@/router';
import {computed, ref} from 'vue'

const data = ref([
    {id: 0, icon: 'mdi-home', link: '/', isActive: false},
    {id: 1, icon: 'mdi-magnify', link: '/search', isActive: false},
    {id: 2, icon: 'mdi-bookmark-outline', link: '#', isActive: false},
    {id: 3, icon: 'mdi-book-alert', link: '/booked', isActive: false},
    {id: 5, icon: 'mdi-human-female-female-child', link: '#', isActive: false},
    {id: 6, icon: 'mdi-cog', link: '#', isActive: false},
])

function activatedOn(index) {
    data.value.forEach(item => item.isActive = false);
    data.value[index].isActive = true;
}

function goLogin() {
    router.push('/login')
}
</script>
<template>
    <section class="section-header">
        <div class="container-header">
            <div class="main-content">
                <div class="box-photo" @click="goLogin()">
                    <img src="../assets/media/crash.webp">
                </div>
                <ul class="focusicon">
                 
                    <li v-for="(item, index) in data" :key="index" class="item-header-box" :class="{active: item.isActive}">
                    <div class="item-header">
                    <router-link  :to="item.link" class="mdiheader" :class="`mdi ${item.icon} `"  @click="activatedOn(index)"></router-link>
                    </div>
                    </li>
                    
                </ul>
                
            </div>
            <div class="config-content" >
            </div>
        </div>
        <div class="arrow">
        <span class="mdi mdi-arrow-right"></span>
        </div>
    </section>
</template>