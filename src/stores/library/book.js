import { reactive } from "vue";
import { defineStore } from "pinia";
import { BookService } from "@/services/index";


export const useBookStore = defineStore('book', () => {
    const state = reactive({
        books: [],
        error: null,
    })

    const getBooks = async () => {
        try {
        state.books = await BookService.getBook()
        } catch(error) {
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
        state, getBooks, postBooks, putBooks, deleteBooks
    }
})