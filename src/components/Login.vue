<script setup>
import { useAuthStore } from '@/stores';
import { reactive } from 'vue';

const emits = defineEmits([
    'sign',
    'auth'
])

const store = useAuthStore()

const user = reactive({
    email: '',
    password: ''
})

const props = defineProps({
    amount: {
        type: String
    }
})

</script>
<template>
    <!--<AuthBase :title="'Login'" :first_box="'Username or Email'" :second_box="'Password'" :directiveMessage="'Do not have an account?'" :directiveButton="'Sign Up'"  @sign="changeToSign = !changeToSign" v-show="changeToSign == true" :position="'left'" :amount="show > 700 ? '60px' : '0px'" @auth="executelogin" />-->
        <div class="container-login-out" :style="'left: ' + props.amount">
            <h1 class="title-login">Login</h1>

            <div class="container-login">
            <div class="login-input-boxes">
                <div class="input-box">
                    <p>Username or Email</p>
                    <input type="text" v-model="user.email">
                </div>
                <div class="input-box">
                    <p>Password</p>
                    <input type="text" v-model="user.password">
                </div>
            </div>

            <div class="login-buttons">
            <button @click="emits('auth', user)">Next</button>
            <p>or try</p>
            <div class="ways-logins-box">
            <span class="mdi mdi-google mdi-h mdilogin" ></span>
            <span class="mdi mdi-facebook mdilogin"></span>
            <span class="mdi mdi-apple mdilogin"></span>
            </div>
            <div class="way-sign-box">
            <p>Do not have an account?</p>
            <span class="sign-text" to="/" @click="emits('sign')" >Sign Up</span>
            </div>
            </div>
            </div>
        </div>
       
</template>