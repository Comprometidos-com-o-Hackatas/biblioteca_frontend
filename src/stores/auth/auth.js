import {computed, reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'
import authService from '@/services/auth/auth'
import api from '@/plugins/api'

export const useAuthStore = defineStore('auth', () => {
    const username = ref('')
    const email = ref('')
    const access = ref('')
    const refresh = ref('')
    const logged = ref(false)
    const password = ref('')
    const userID = ref('')
    const users = ref([])
    const user = ref('')
    const getError = ref('')
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
            users.value = response.data
            data.value = response.data;
            console.log(users.value)
            const result = data.value.findIndex(s => s.email === email.value)
            userInfo.email = data.value[result].email
            userInfo.username = data.value[result].first_name
            userInfo.age = data.value[result].age
            userID.value = data.value[result].id
            user.value = data.value[result]
    }  
    
    return {logged, Login, logout, autologin, createAccount, email, getUserInfo, userInfo, userID, users, user, getError }
})