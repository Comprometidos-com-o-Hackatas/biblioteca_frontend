import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"
import api from "@/plugins/api"
import api from "@/plugins/api"
export const useRatingStore = defineStore('rating', () => {
    const ratings = ref([])
    const userrating = ref([])
    async function getRatings(id) {
        const email = localStorage.getItem('email')
        const { data } = await api.get("/avaliacao/")
        const results = data.results
        let arr = []
        let arr2 = []
        for (let i = 0; i < data.results.length; i++) {
            if (results[i].livro.id === Number(id)) {
                arr.push(results[i])
            }
            if(results[i].usuario.email === email){
                arr2.push(results[i])
            }
        }
        userrating.value = arr2
        ratings.value = arr
        console.log(userrating.value)
    }
    async function CreateRating(rating) {
        const api = await api.post("/avaliacao/", rating)
    }

    return { getRatings, ratings,userrating, CreateRating }
})

