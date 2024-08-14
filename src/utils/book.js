import { ref } from "vue"

export const bookdetails = ref([
    {
        id: 1,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_892505-MLB45157960264_032021-F.jpg",
        genere: {id: 1, description: 'Adulto'},
        category: [
            {id: 1, description: 'Romance'},
            {id: 2, description: 'Aventura'}
        ]
    }
])