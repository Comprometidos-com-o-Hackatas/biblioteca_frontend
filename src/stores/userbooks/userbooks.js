import api from "@/plugins/api";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
const token = localStorage.getItem('access')
const date = new Date()
export const useUserBooks = defineStore('userbooks', () => {
    const userbooks = ref([])
    const userbooksToConfig = ref([])
    const errorBook = ref('')
    let books = ''

    async function GetUserBooks() {
        const { data } = await api.get("/livropego/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        userbooks.value = data
        console.log(userbooks.value)
    }

    async function GetUserBooksToConfig(){
        try {
        userbooksToConfig.value = await GotBookService.listGotBooks()
        console.log(userbooksToConfig.value)
        } catch (error) {
            errorBook.value = error
        }
    }

    async function CreateUserBooks(book) {
        if (books) {
            await api.patch(`/usuarios/${book.usuario}/`, {
                has_book: true
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            await api.patch(`livropego/${books}/`, {
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
            await api.patch(`/usuarios/${book.usuario}/`, {
                has_book: true
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            await api.post("/livropego/", book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        }
    }

    async function UpdateUserBooks(id, user) {
        await api.patch(`/usuarios/${user}/`, {
            has_book: false
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        await api.patch(`/livropego/${id}/`, {
            livro: {
                disponivel: true
            },
            active: false
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        location.reload()
    }
    async function usuariohadbook(book) {
        const { data } = await api.get(`/livropego/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setTimeout(() =>{
            const finduser = data.find(user => user.livro.id === Number(book))
            books = finduser.id
        }, 2000)
    }
    return { GetUserBooks, usuariohadbook, UpdateUserBooks, CreateUserBooks, GetUserBooksToConfig, userbooks, userbooksToConfig }

}) 