import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"
const token = localStorage.getItem('access')

export const useSavedStore = defineStore('store', () =>{
    const savedbooks = ref([])

    async function GetSavedBooks(){
        const { data } = await axios.get("http://127.0.0.1:8000/api/favorito/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        savedbooks.value = data.results
        console.log(data)
    }
    async function CreateSavedBook(save) {
        await axios.post("http://127.0.0.1:8000/api/favorito/", save, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    return {GetSavedBooks, CreateSavedBook, savedbooks}
})