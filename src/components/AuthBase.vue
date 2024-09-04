<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores';
import { reactive } from 'vue';

const emits = defineEmits([
    'sign'
])

const store = useAuthStore()

const user = reactive({
    email: '',
    password: ''
})

function executelogin(){
    store.Login(user)
    router.push('home/')
}

const props = defineProps({
    title: {
        type: String
    },
    first_box: {
        type: String
    },
    second_box: {
        type: String
    },
    third_box: {
        type: String
    },
    hasThird: {
        type: Boolean,
        default: false
    },
    directiveMessage: {
        type: String
    },
    directiveButton: {
        type: String
    },
    position: {
        type: String
    },
    amount: {
        type: String
    }
})
</script>
<template>
        <div class="container-login-out" :style="props.position + ': ' + props.amount">
            <h1 class="title-login">{{props.title}}</h1>

            <div class="container-login">
            <div class="login-input-boxes">
                <div class="input-box">
                    <p>{{ props.first_box }}</p>
                    <input type="text" v-model="user.email">
                </div>
                <div class="input-box">
                    <p>{{props.second_box}}</p>
                    <input type="text" v-model="user.password">
                </div>
                <div class="input-box" v-show="hasThird">
                    <p>{{props.third_box}}</p>
                    <input type="text">
                </div>
            </div>

            <div class="login-buttons">
            <button @click="executelogin">Next</button>
            <p>or try</p>
            <div class="ways-logins-box">
            <span class="mdi mdi-google mdi-h mdilogin" ></span>
            <span class="mdi mdi-facebook mdilogin"></span>
            <span class="mdi mdi-apple mdilogin"></span>
            </div>
            <div class="way-sign-box">
            <p>{{props.directiveMessage}}</p>
            <span class="sign-text" to="/" @click="emits('sign')" >{{props.directiveButton}}</span>
            </div>
            </div>
            </div>
        </div>
       
</template>