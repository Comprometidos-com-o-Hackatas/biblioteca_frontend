import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useSavedStore = defineStore('store', () =>{
    const savedbooks = ref([])

    async function GetSavedBooks(){
        const { data } = await axios.get("http://127.0.0.1:8000/api/favorito/")
        savedbooks.value = data.results
    }
    async function CreateSavedBook(save) {
        await axios.post("http://127.0.0.1:8000/api/favorito/", save)
    }

    return {GetSavedBooks, CreateSavedBook, savedbooks}
})