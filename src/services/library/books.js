import api from '@/plugins/api'
const token = localStorage.getItem('psg_auth_token')


class BookService {
    async getBook(){
    try {
        const {data} = await api.get('/livro', {headers: {authorization: `Bearer ${token}`}})
        return data.results;
    } catch (error) {
        console.log('error in get book', error)
        throw error;
    }
    }

    async postBook(book) {
    try {
        const {data} = await api.post('/livro', book, {headers: {authorization: `Bearer ${token}`}})
        return data.results
    } catch (error) {
        console.log('error in post book', error)
        throw error;
    }
    }

    async putBook(book) {
        try {
            const {data} = await api.put(`/livro/${book.id}`, book, {headers: {authorization: `Bearer ${token}`}})
            return data.results
        } catch (error) {
            console.log('error in put book', error, {headers: {authorization: `Bearer ${token}`}})
            throw error;
        }
    }

    async deleteBook(id) {
        try {
            const {data} = await api.delete(`/livro/${id}`, {headers: {authorization: `Bearer ${token}`}})
            return data.results
        } catch (error) {
            console.log('error in delete book', error)
            throw error;
        }
    }
}

export default new BookService()