import api from '@/plugins/api'

class BookService {
    async getBook(){
    try {
        const {data} = await api.get('/livro')
        return data.results;
    } catch (error) {
        console.log('error in get book', error)
        throw error;
    }
    }

    async getSavedBook(){
        try {
            const {data} = await api.get('/favorito')
            return data.results;
        } catch (error) {
            console.log('error in get saved book', error)
            throw error;
        }
        }

    async postBook(book) {
    try {
        const {data} = await api.post('/livro/', book)
        return data.results
    } catch (error) {
        console.log('error in post book', error)
        throw error;
    }
    }

    async putBook(book) {
        try {
            const {data} = await api.put(`/livro/${book.id}/`, book)
            return data.results
        } catch (error) {
            console.log('error in put book', error)
            throw error;
        }
    }

    async deleteBook(id) {
        try {
            const {data} = await api.delete(`/livro/${id}`)
            return data.results
        } catch (error) {
            console.log('error in delete book', error)
            throw error;
        }
    }
}

export default new BookService()