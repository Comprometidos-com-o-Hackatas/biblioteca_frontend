<script setup>

import AuthBase from '@/components/AuthBase.vue'
import { useAuthStore } from '@/stores';
import { reactive, computed, ref } from 'vue';

const authStore = useAuthStore()

const emits = defineEmits([
    'sign'
])

const props = defineProps({
    amount: {
        type: String
    }
})

const userSign = reactive({
    email: '',
    password: '',
    first_name: '',
    age: 0,
    is_active: true,
    is_staff: true
})

</script>
<template>

   <!-- <AuthBase :title="'Sign Up'" :first_box="'Username or Email'" :second_box="'Password'" :hasThird="true" :third_box="'Age'" :directiveMessage="'Already have an account?'" :directiveButton="'Login'" :directivePosition="'right'" :position="'204px'" @sign="emits('sign')" @auth="createAccount"/>-->
    
   <div class="container-login-out" :style="'right:' + props.amount">
            <h1 class="title-login">Sign Up</h1>

            <div class="container-login">
            <div class="login-input-boxes">
                <div class="input-box">
                    <p> Email </p>
                    <input type="text" v-model="userSign.email">
                </div>
                <div class="input-box">
                    <p>Username</p>
                    <input type="text" v-model="userSign.first_name">
                </div>
                <div class="input-box">
                    <p>Password</p>
                    <input type="text" v-model="userSign.password">
                </div>
                <div class="input-box">
                    <p>Age</p>
                    <input type="number" v-model="userSign.age">
                </div>
            </div>

            <div class="login-buttons">
            <button @click="emits('auth', userSign)">Next</button>
            <p>or try</p>
            <div class="ways-logins-box">
            <span class="mdi mdi-google mdi-h mdilogin" ></span>
            <span class="mdi mdi-facebook mdilogin"></span>
            <span class="mdi mdi-apple mdilogin"></span>
            </div>
            <div class="way-sign-box">
            <p>Already have an account?</p>
            <span class="sign-text" to="/" @click="emits('sign')" >Login</span>
            </div>
            </div>
            </div>
        </div>

</template>