import axios from 'axios'

export default class AuthService {
    async postUsetToken(token) {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/usuarios/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    }
}