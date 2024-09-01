<script setup>
import router from '@/router';
import {computed, onMounted, ref} from 'vue'
import { activatedOn } from '@/utils/config';
import {dataHeader} from '@/utils/header'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore, useBookStore } from '@/stores/index';

const authStore = useAuthStore()
const bookStore = useBookStore()
onMounted(()=>{
    console.log(PassageUser)
})
function goLogin() {
    router.push('/login')
}
</script>
<template>
    <section class="section-header">
        <div class="container-header">
            <div class="main-content">
                <div class="box-photo" @click="goLogin(authToken())">
                    <img src="../assets/media/crash.webp">
                </div>
                <ul class="focusicon">
                 
                    <li v-for="(item, index) in dataHeader" :key="index" class="item-header-box" :class="{active: item.isActive}">
                    <div class="item-header">
                    <router-link  :to="item.link" class="mdiheader" :class="`mdi ${item.icon} `"  @click="activatedOn(index, dataHeader)"></router-link>
                    </div>
                    </li>
                    <li><button @click="authStore.unsetToken()" >Logout</button></li>
                    
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