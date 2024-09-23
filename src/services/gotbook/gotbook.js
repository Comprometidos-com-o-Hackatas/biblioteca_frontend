import api from "@/plugins/api";
import axios from 'axios'
const token = localStorage.getItem('access')
let book = null
class GotBookService {

    async listGotBooks() {
        try {
            const {data} = await api.get('/livropego/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            return data
            } catch(error) {
                throw error;
            }
    }
       
    async createGotBooks(book) {
        try {
            const {data} = await api.post('/livropego/', book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            return data
        } catch (error) {
            throw error;
        }
    }

    async updateGotBooks(book) {
        try {
            const {data} = await api.put(`/livropego/${book.id}/`, book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            return data
        } catch (error) {
            throw error;
        }
    }

    async removeGotBooks(id) {
        try {
            const {data} = api.delete(`/livropego/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            return data
        } catch (error) {
            throw error;
        }
    }

}

export default new GotBookService()