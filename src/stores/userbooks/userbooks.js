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
        console.log(userbooks.value)
    }

    async function CreateUserBooks(book){
        await axios.post("http://127.0.0.1:8000/api/livropego/", book, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    async function UpdateUserBooks(id){
        const update = {
            livro: {
                disponivel: true
            }
        }
        await axios.patch(`http://127.0.0.1:8000/api/livropego/${id}/`, update, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    return {GetUserBooks, UpdateUserBooks, CreateUserBooks, userbooks}
    
}) 