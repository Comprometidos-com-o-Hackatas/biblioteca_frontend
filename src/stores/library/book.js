import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { BookService } from "@/services/index";
import { PassageUser } from "@passageidentity/passage-elements/passage-user";
import { useAuthStore } from "../auth/auth";

export const useBookStore = defineStore('book', () => {
    const authStore = useAuthStore()

    const state = reactive({
        books: [],
        booksByAge: [],
        error: null,
        selectedBook: null,
        savedBooks: []
    })

    const count = ref(0)

    const setbooksByage = () => {
        for (let i = 0; i < state.books.length; i++) {
            switch (state.books[i].categoria.descricao) {
                case 'Adulto':
                    if (authStore.userInfo.age >= 16) {
                        state.booksByAge.push(state.books[i])
                    }
                    break;
                case 'Infantojuvenil':
                    if (authStore.userInfo.age >= 12) {
                        state.booksByAge.push(state.books[i])
                    }
                    break;
                case 'Infantil':
                    if (authStore.userInfo.age >= 0) {
                        state.booksByAge.push(state.books[i])
                    }
                    break;
                default:
                    break;
            }
        }
     }

    const getBooks = async () => {
        try {
        state.books = await BookService.getBook()
        
        } catch(error) {
            state.error = error
        }
    }

    const getSavedBooks = async () => {
        try {
            state.savedBooks = await BookService.getSavedBook()
        } catch (error) {
            state.error = error
        }
    }

    const postBooks = async (book) => {
        try {
            state.books.push(await BookService.postBook(book))
        } catch (error) {
            state.error = error
        }
    }

    const putBooks = async (book) => {
        try {
            const index = state.books.findIndex((s) => s.id === book.id)
            state.books[index] = await BookService.putBook(book)
        } catch (error) {
            state.error = error
        }
    }

    const deleteBooks = async (id) => {
        try {
            const index = state.books.findIndex((s) => s.id === id)
            state.books.splice(index, 1)
            await BookService.deleteBook(id)
        } catch (error) {
            state.error = error
        }
    }

    return {
        state, getBooks, postBooks, putBooks, deleteBooks, count, getSavedBooks, setbooksByage
    }
})