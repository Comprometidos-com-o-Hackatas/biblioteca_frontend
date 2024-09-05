import {ref} from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'
import authService  from '@/services/auth/auth'

export const useAuthStore = defineStore('auth', ()=> {
    const email = ref(null)
    const access = ref(null)
    const refresh = ref(null)
    const logged = ref(false)
    const password = ref(null)
    
    async function Login(user){
        const { data } = await axios.post("http://127.0.0.1:8000/api/token/", user)
        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh)
        localStorage.setItem('email', user.email)
        localStorage.setItem('password', user.password)
        email.value = user.email
        password.value = user.password    
        logged.value = true
        access.value = data.access
        refresh.value = data.refresh
        router.push('/home/')
    }

    async function logout(){
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        access.value = ''
        refresh.value = ''
        logged.value = !logged.value
        router.push('/')
    }

    async function createAccount(user) {
        await authService.postUser(user)

    }
    function autologin(){
        if(localStorage.getItem('access') && localStorage.getItem('refresh')){
            logged.value = true
            access.value = localStorage.getItem('access')
            refresh.value = localStorage.getItem('refresh')
            email.value = localStorage.getItem('email')
            password.value = localStorage.getItem('password')
        }
    }
    
    return {logged, Login, logout, autologin, createAccount}
})