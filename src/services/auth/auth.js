import api from "@/plugins/api";

class authService {

    async postUser(user) {
        try {
        const {data} = await api.post(`/usuarios/`, user)
        return data.results
    } catch (error) {
        throw error;
    }
    }
}

export default new authService()