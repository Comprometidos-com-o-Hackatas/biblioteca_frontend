<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores';
import { onMounted, reactive } from 'vue';

const emits = defineEmits([
    'sign',
    'auth'
])

const store = useAuthStore()

const user = reactive({
    email: '',
    password: ''
})

function executelogin(){
    store.Login(user)
}

onMounted(() =>{
    const password = localStorage.getItem('password')
    const email = localStorage.getItem('email')

    if(password && email){
        user.email = email
        user.password = password
    }
})


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
       
</template>