import {computed, onMounted} from 'vue'
import axios from 'axios'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

onMounted(async()=>{
    const getResponse = await axios.get(`http://127.0.0.1:8000/api/users/usuarios/`)
    const getUserID = computed(()=> getResponse.filter(s => s.passage_id === PassageUser.id))
})


export default class AuthService {
    async postUsetToken(token) {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/usuarios/${getUserID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
