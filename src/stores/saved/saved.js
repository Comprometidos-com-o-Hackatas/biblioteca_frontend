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

    async function DeleteBook(id) {
        const book = savedbooks.value.find(book => book.livro.id === Number(id))
        const savedbookapi = await axios.delete(`http://127.0.0.1:8000/api/favorito/${book.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(savedbookapi)
    }

    return {GetSavedBooks, CreateSavedBook, DeleteBook, savedbooks}
})