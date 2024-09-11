import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
const token = localStorage.getItem('access')
const date = new Date()
export const useUserBooks = defineStore('userbooks', () => {
    const userbooks = ref([])
    let books = null
    async function GetUserBooks() {
        const { data } = await axios.get("http://127.0.0.1:8000/api/livropego/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        userbooks.value = data.results
        console.log(userbooks.value)
    }

    async function CreateUserBooks(book) {
        if (books) {
            await axios.patch(`http://127.0.0.1:8000/api/usuarios/${book.usuario}/`, {
                has_book: true
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            await axios.patch(`http://127.0.0.1:8000/api/livropego/${books}/`, {
            data_devolucao: `${date.getFullYear()}-${Number(date.getMonth() + 3).toString()}-${date.getDate()}`,
            livro: {
                disponivel: false
             }
        }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        }
        else {
            await axios.patch(`http://127.0.0.1:8000/api/usuarios/${book.usuario}/`, {
                has_book: true
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            await axios.post("http://127.0.0.1:8000/api/livropego/", book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        }
    }

    async function UpdateUserBooks(id, user) {
        await axios.patch(`http://127.0.0.1:8000/api/usuarios/${user}/`, {
            has_book: false
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        await axios.patch(`http://127.0.0.1:8000/api/livropego/${id}/`, {
            livro: {
                disponivel: true
            }
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        location.reload()
    }
    async function usuariohadbook(book) {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/livropego/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const finduser = data.results.find(user => user.livro.id === Number(book))
        books = finduser.id
    }
    return { GetUserBooks, usuariohadbook, UpdateUserBooks, CreateUserBooks, userbooks }

}) 