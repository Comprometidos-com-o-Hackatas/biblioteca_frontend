<script setup>
import {ref} from 'vue'

const emits = defineEmits([
    'sign'
])

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
})
</script>
<template>
        <div class="container-login-out">
            <h1>{{props.title}}</h1>

            <div class="container-login">
            <div class="login-input-boxes">
                <div class="input-box">
                    <p>{{ props.first_box }}</p>
                    <input type="text">
                </div>
                <div class="input-box">
                    <p>{{props.second_box}}</p>
                    <input type="text">
                </div>
                <div class="input-box" v-show="hasThird">
                    <p>{{props.third_box}}</p>
                    <input type="text">
                </div>
            </div>

            <div class="login-buttons">
            <button>Next</button>
            <p>or try</p>
            <div class="ways-logins-box">
            <span class="mdi mdi-google mdi-h" ></span>
            <span class="mdi mdi-facebook"></span>
            <span class="mdi mdi-apple"></span>
            </div>
            <div class="way-sign-box">
            <p>{{props.directiveMessage}}</p>
            <span class="sign-text" to="/" @click="emits('sign')" >{{props.directiveButton}}</span>
            </div>
            </div>
            </div>
        </div>
       
</template>