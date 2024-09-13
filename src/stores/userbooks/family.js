import axios from 'axios'
import api from '@/plugins/api'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useAuthStore } from '../auth/auth'
import { FamilyService } from '@/services'


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
        family.family = await FamilyService.listFamilies()
        family.users = family.family[0].Usuario
        } catch(error) {
            family.error = error
        }
    }

//Essa função abaixo serve para identificar o objeto do usuario dentro da array users do authStore que pega o objeto inteiro do usuario através do id que se recebe pela função de listar familias (get). Isso ocorre pois os usuarios da tabela familias sao recebidos por um ID.
    setTimeout(()=>{
        for (let i = 0; i < family.users.length; i++) {
            if (authStore.users.filter(s => s.id === family.users[i])) {
                const index = authStore.users.findIndex(s => s.id === family.users[i])
                family.usersForReal.push(authStore.users[index])
            }
        }
    },500)
   

    const postFamilies = async (families) => {
        try {
           family.family.push(await FamilyService.createFamilies(families))
        } catch (error) {
            family.error = error
        }
    }

    const putFamilies = async (person) => {
        try {
           await FamilyService.updateFamilies(person,person.id)
        } catch (error) {
            family.error = error
        }
    }

    const deleteFamilies = async (families, person) => {
        try {
            const index = family.family.findIndex((s) => s.id === families.id)
            family.family[index].splice(person.id, 1)
            await FamilyService.removeFamilies(person.id)
        } catch (error) {
            family.error = error
        }
    }

    return {
        family, getFamilies, postFamilies, putFamilies, deleteFamilies, familyObj
    }
})