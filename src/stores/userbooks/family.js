import axios from 'axios'
import api from '@/plugins/api'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
const token = localStorage.getItem('access')

export const useFamilyStore = defineStore('familyStore', () => {
    const family = reactive({
        family: [],
        users: [],
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