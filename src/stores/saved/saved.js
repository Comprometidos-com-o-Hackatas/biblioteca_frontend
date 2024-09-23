import { defineStore } from "pinia"
import { ref } from "vue"
import api from "@/plugins/api"
const token = localStorage.getItem('access')

export const useSavedStore = defineStore('store', () =>{
    const savedbooks = ref([])

    async function GetSavedBooks(){
        const { data } = await api.get("/favorito/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        savedbooks.value = data
    }
    async function CreateSavedBook(save) {
        await api.post("/favorito/", save, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    async function DeleteBook(id) {
        const book = savedbooks.value.find(book => book.livro.id === Number(id))
        const savedbookapi = await api.delete(`/favorito/${book.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(savedbookapi)
    }
    return {GetSavedBooks, CreateSavedBook, DeleteBook, savedbooks}
})