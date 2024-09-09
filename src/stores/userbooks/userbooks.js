import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
const token = localStorage.getItem('access')


export const useUserBooks = defineStore('userbooks', () =>{
    const userbooks = ref([])

    async function GetUserBooks(){
        const { data } = await axios.get("http://127.0.0.1:8000/api/livropego/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        userbooks.value = data.results
    }

    async function CreateUserBooks(book){
        await axios.post("http://127.0.0.1:8000/api/livropego/", book, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    return {GetUserBooks, CreateUserBooks, userbooks}
    
}) 