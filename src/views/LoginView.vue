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
const msg = ref('')
const msgCreate = ref('')

const seeMsg = computed(()=> msg.value)
const seeMsgCreate = computed(()=> msgCreate.value)

async function executelogin(user){
    await store.Login(user)

    if (store.getError != null) {
    msg.value = 'Há algo de errado com suas Credenciais'
    setTimeout(()=>{
        msg.value = ''
    }, 5000)
   }
}

const show = computed(()=> {
    return widthscreen.value
})

function createAccount(userSign) {
    if (!userSign.email.includes('@') || userSign.password.length < 4 || userSign.age <= 0) {
    msgCreate.value = 'Há algo de errado com suas Credenciais'
    setTimeout(()=>{
        msgCreate.value = ''
    }, 5000)
} else {
    store.createAccount(userSign)
    changeToSign.value = !changeToSign.value
}
    
}

</script>
<template>
    <main class="main-login">
        <section class="section-login" :class="{active: !changeToSign}">
       <Login :amount="show > 700 ? '60px' : '0px'" @sign="changeToSign = !changeToSign" v-if="changeToSign" @auth="executelogin" />
       <Sign @sign="changeToSign = !changeToSign" :amount="show > 700 ? '60px' : '0px'" @auth="createAccount" v-else />

        <div v-if="msg.length > 0" class="message-box">
        <p class="message-error">{{ seeMsg }}</p>
        </div>

        <div v-if="msgCreate.length > 0" class="message-box-create">
        <p class="message-error">{{ seeMsgCreate }}</p>
        </div>
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