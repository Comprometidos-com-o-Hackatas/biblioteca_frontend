<script setup>
import {computed, ref} from 'vue'

const data = ref([

    {icon: 'mdi-home', link: '/login', isActive: false},
    {icon: 'mdi-magnify', link: '/', isActive: false},
    {icon: 'mdi-bookmark-outline', link: '#', isActive: false},
    {icon: 'mdi-book-alert', link: '/booked', isActive: false},
    {icon: 'mdi-human-female-female-child', link: '#', isActive: false},
    {icon: 'mdi-cog', link: '#', isActive: false},
    {id: 0, icon: 'mdi-home', link: '/login', isActive: false},
    {id: 1, icon: 'mdi-magnify', link: '/', isActive: false},
    {id: 2, icon: 'mdi-bookmark-outline', link: '#', isActive: false},
    {id: 3, icon: 'mdi-book-alert', link: '#', isActive: false},
    {id: 5, icon: 'mdi-human-female-female-child', link: '#', isActive: false},
    {id: 6, icon: 'mdi-cog', link: '#', isActive: false},

])
const saveClicks = ref([])

function activatedOn(index) {
    saveClicks.value.push(data.value[index].id)
    data.value[index].isActive = !data.value[index.isActive]
    if (saveClicks.value.length > 1) {
        saveClicks.value.shift()
        for (let i = 0; i < data.value.length; i++) { 
                data.value[i].isActive = false
        }
        data.value[index].isActive = !data.value[index].isActive
    } 
}



</script>
<template>
    <section class="section-header">
        <div class="container-header">
            <div class="main-content">
                <div class="box-photo">
                    <img src="../assets/media/crash.webp">
                </div>
                <ul class="focusicon">
                    <li v-for="(item, index) in data" :key="index" class="item-header" :class="{active: item.isActive}"> <router-link  :to="item.link" class="mdiheader" :class="`mdi ${item.icon} `"  @click="activatedOn(index)"></router-link></li>
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