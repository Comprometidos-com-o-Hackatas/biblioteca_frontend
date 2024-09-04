<script setup>
import {ref, computed} from 'vue'
import AuthBase from '@/components/AuthBase.vue'
import Sign from '@/components/Sign.vue'
import Login from '@/components/Login.vue';
import { useAuthStore } from '@/stores';
import router from '@/router';
const changeToSign = ref(true)
const widthscreen = ref(window.innerWidth)

const store = useAuthStore()


function executelogin(user){
    store.Login(user)
    router.push('/home/')
}

const show = computed(()=> {
    return widthscreen.value
})

function createAccount(userSign) {
    store.createAccount(userSign)
    window.location.reload()
}

</script>
<template>
    <main class="main-login">
        <section class="section-login" :class="{active: !changeToSign}">
       <Login :amount="show > 700 ? '60px' : '0px'" @sign="changeToSign = !changeToSign" v-if="changeToSign" @auth="executelogin" />
       <Sign @sign="changeToSign = !changeToSign" :amount="show > 700 ? '60px' : '0px'" @auth="createAccount" v-else />
    </section>
    </main>
</template>
<style scoped>

* {
    cursor: default;
}

.authContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
}
</style>