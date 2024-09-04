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
        email.value = user.email
        password.value = user.password    
        logged.value = !logged.value
        access.value = data.access
        refresh.value = data.refresh
        console.log(data)
    }

    async function logout(){
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        logged.value = !logged.value
        router.push('/')
    }

    async function createAccount(user) {
        await authService.postUser(user)
        
    }
    
    return {email, Login, logout, logged, createAccount}
})