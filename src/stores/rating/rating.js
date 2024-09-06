import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useRatingStore = defineStore('rating', () => {
    const ratings = ref([])

    async function getRatings(){
        const { data } = await axios.get("http://127.0.0.1:8000/api/avaliacao/")
        ratings.value = data.results
    }
    async function CreateRating(rating){
        const api = await axios.post("http://127.0.0.1:8000/api/avaliacao/", rating)
    }   
    return {getRatings, ratings, CreateRating}
})