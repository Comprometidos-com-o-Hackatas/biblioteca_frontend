import {computed, reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'
import authService from '@/services/auth/auth'
import api from '@/plugins/api'

export const useAuthStore = defineStore('auth', () => {
    const username = ref(null)
    const email = ref(null)
    const access = ref(null)
    const refresh = ref(null)
    const logged = ref(false)
    const password = ref(null)
    const userID = ref(null)
    const users = ref([])
    const user = ref(null)
    const getError = ref(null)
    const userInfo = reactive({
        email: '',
        username: '',
        age: 0
    })
    
    async function Login(user){
        try {
        const { data } = await api.post("/token/", user)
        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh)
        localStorage.setItem('email', user.email)
        localStorage.setItem('password', user.password)
        email.value = user.email
        password.value = user.password
        username.value = user.first_name
        logged.value = true
        access.value = data.access
        refresh.value = data.refresh
        console.log(data)
        router.push('/home/')
    } catch (error) {
        getError.value = error
    }
    }

    async function logout() {
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
    function autologin() {
        if (localStorage.getItem('access') && localStorage.getItem('refresh')) {
            logged.value = true
            access.value = localStorage.getItem('access')
            refresh.value = localStorage.getItem('refresh')
            email.value = localStorage.getItem('email')
            password.value = localStorage.getItem('password')
            router.push('home/')
        }
    }

    const getUserInfo = async () => {
            const data = ref([]);
            const response = await api.get("/usuarios/");
            users.value = response.data.results
            data.value = response.data;
            console.log(users.value)
            const result = data.value.results.findIndex(s => s.email === email.value)
            userInfo.email = data.value.results[result].email
            userInfo.username = data.value.results[result].first_name
            userInfo.age = data.value.results[result].age
            userID.value = data.value.results[result].id
            user.value = data.value.results[result]
    }  
    
    return {logged, Login, logout, autologin, createAccount, email, getUserInfo, userInfo, userID, users, user, getError }
})