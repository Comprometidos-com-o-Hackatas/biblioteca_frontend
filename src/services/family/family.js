import api from "@/plugins/api";
const token = localStorage.getItem('access')
class FamilyService {

    async listFamilies() {
        try {
            const {data} = await api.get('/familias/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            return data
            } catch(error) {
                throw error;
            }
    }
       
    async createFamilies(families) {
        try {
           const {data} =  await api.post('/familias/', families, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
        return data
        } catch (error) {
            throw error;
        }
    }

    async updateFamilies(person, id) {
        try {
           const {data} = await api.put(`/familias/${id}/`, person , {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            return data
        } catch (error) {
            throw error;
        }
    }

    async removeFamilies(id) {
        try {
            const {data} = api.delete(`/familias/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            return data
        } catch (error) {
            throw error;
        }
    }

}

export default new FamilyService()