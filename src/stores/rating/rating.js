import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"
import api from "@/plugins/api"
export const useRatingStore = defineStore('rating', () => {
    const ratings = ref([])
    const userrating = ref([])
    async function getRatings(id) {
        const email = localStorage.getItem('email')
        const { data } = await api.get("/avaliacao/")
        const results = data
        let arr = []
        let arr2 = []
        for (let i = 0; i < data.length; i++) {
            if (results[i].livro.id === Number(id)) {
                arr.push(results[i])
            }
            if(results[i].usuario.email === email){
                arr2.push(results[i])
            }
        }
        userrating.value = arr2
        ratings.value = arr
        console.log(data)
    }
    async function CreateRating(rating) {
        await api.post("/avaliacao/", rating)
    }

    return { getRatings, ratings,userrating, CreateRating }
})

