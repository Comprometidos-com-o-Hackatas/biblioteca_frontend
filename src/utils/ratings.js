import { ref } from "vue";

export const userratings = ref([
    {
        id: 1,
        user: {
            email: 'luanemail@gmail.com',
            photo: {
                file: "https://i.pinimg.com/originals/0b/a1/18/0ba118209e83762920760c38839282ae.jpg"
            },
        },
        coment: 'teste',
        rating: 4.9,
    }
])