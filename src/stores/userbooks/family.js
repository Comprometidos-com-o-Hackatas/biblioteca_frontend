import axios from 'axios'
import api from '@/plugins/api'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useAuthStore } from '../auth/auth'
const token = localStorage.getItem('access')

export const useFamilyStore = defineStore('familyStore', () => {
    const authStore = useAuthStore()
    const family = reactive({
        family: [],
        users: [],
        usersForReal: [],
        error: null
    })

    const familyObj = reactive({
        nome: '',
        usuario: []
    })

    const getFamilies = async () => {
        try {
        const {data} = await api.get('/familias/', {
            headers: {
                Authorization: `Bearer ${token}`,
            }})
        family.family = data.results
        family.users = data.results[0].Usuario
        } catch(error) {
            family.error = error
        }
    }

    setTimeout(()=>{
        for (let i = 0; i < family.users.length; i++) {
            if (authStore.users.filter(s => s.id === family.users[i])) {
                const index = authStore.users.findIndex(s => s.id === family.users[i])
                family.usersForReal.push(authStore.users[index])
            }
        }
    },2000)
   

    const postFamilies = async (families) => {
        try {
            await api.post('/familias/', families, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
        } catch (error) {
            family.error = error
        }
    }

    const putFamilies = async (person) => {
        try {
            await api.put(`/familias/${family.family[0].id}/`, person , {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
        } catch (error) {
            family.error = error
        }
    }

    const deleteFamilies = async (families, person) => {
        try {
            const index = family.family.findIndex((s) => s.id === families.id)
            family.family[index].splice(person.id, 1)
            await api.put(`/familias/${index}/`, families, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
        } catch (error) {
            family.error = error
        }
    }

    return {
        family, getFamilies, postFamilies, putFamilies, deleteFamilies, familyObj
    }
})