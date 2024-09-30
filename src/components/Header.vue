<script setup>
import { useAuthStore } from '@/stores';
import { activatedOn } from '@/utils/config';
import {dataHeader} from '@/utils/header'

const authStore = useAuthStore()

</script>
<template>
    <section class="section-header">
        <div class="container-header">
            <div class="main-content">
                <div class="box-photo">
                    <router-link to="/User" v-if="authStore.logged">
                    <img src="https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png" >
                    </router-link>
                    <router-link to="/" v-else> 
                    <div style="width: 100%; display: flex; justify-content: center; align-items: center;" >
                        <span class="mdi mdi-account mdiheader"></span>
                    </div>
                    </router-link>
                </div>
                <ul class="focusicon">
                 
                    <li v-for="(item, index) in dataHeader" :key="index" class="item-header-box" :class="{active: item.isActive}">
                    <div class="item-header">
                    <router-link  :to="item.link" class="mdiheader" :class="`mdi ${item.icon} `"  @click="activatedOn(index, dataHeader)"></router-link>
                    </div>
                    </li>
                    <li v-if="authStore.logged" ><span class="mdi mdi-logout mdiheader" @click="authStore.logout()"></span></li>

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