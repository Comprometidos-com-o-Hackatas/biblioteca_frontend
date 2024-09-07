import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useRatingStore = defineStore('rating', () => {
    const ratings = ref([])

    async function getRatings(id) {
        const { data } = await axios.get("http://127.0.0.1:8000/api/avaliacao/")
        const results = data.results
        let arr = []
        for (let i = 0; i < data.results.length; i++) {
            if (results[i].livro.id === Number(id)) {
                arr.push(results[i])
            }
        }
        ratings.value = arr
        console.log(ratings.value)
    }
    async function CreateRating(rating) {
        const api = await axios.post("http://127.0.0.1:8000/api/avaliacao/", rating)
    }
    return { getRatings, ratings, CreateRating }
})