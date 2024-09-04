import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { BookService } from "@/services/index";
import { PassageUser } from "@passageidentity/passage-elements/passage-user";


export const useBookStore = defineStore('book', () => {
    const state = reactive({
        books: [],
        error: null,
        selectedBook: null,
    })

    const widthScreen = window.innerWidth

const cards = ref(0)

const booksList = ref([
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Aventura'},
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Ação'},
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Romance'},
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Ficção'}
])

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
        state, getBooks, postBooks, putBooks, deleteBooks, cards, booksList
    }
})