import {ref} from 'vue'
export const manage_book_data = ref([
    { title: 'Dom Casmurro', isBlocked: false, img: 'https://m.media-amazon.com/images/I/61Z2bMhGicL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'O Primo Basílio', isBlocked: false, img: 'https://http2.mlstatic.com/D_NQ_NP_2X_892505-MLB45157960264_032021-F.jpg' },
    { title: 'Memórias Póstumas de Brás Cubas', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'O Guarani', isBlocked: false, img: 'https://tse1.mm.bing.net/th?id=OIP.0FIByAdUBKdESR5AZfg-GAHaL0&amp;pid=Api&amp;P=0&amp;h=180' },
    { title: 'Iracema', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'Grande Sertão: Veredas', isBlocked: false, img: 'https://boanova.fbitsstatic.net/img/p/diario-de-uma-garota-nada-popular-volume-2-83103/249960.jpg?w=800&amp;h=800&amp;v=no-change' },
    { title: 'A Moreninha', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'Os Maias', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'Senhora', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'O Cortiço', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'O Ateneu', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'A Hora da Estrela', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
    { title: 'Vidas Secas', isBlocked: false, img: 'https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg' },
]);
 
 export const manage_category_data = ref([
     { label: 'Ficção' },
     { label: 'Não-Ficção' },
     { label: 'Ficção Científica' },
     { label: 'Fantasia' },
     { label: 'Mistério' },
     { label: 'Romance' },
     { label: 'Biografia' },
     { label: 'Histórico' },
 ]);

export const data = ref([
    {title: 'Site config', isActive: false},
    {title: 'Account config', isActive: false},
    {title: 'Family config', isActive: false}
])

export const family = [
    {name: 'Fabio', icon: 'mdi mdi-crown'},
    {name: 'Gabriel', icon: 'mdi mdi-human-cane'},
    {name: 'João', icon: 'mdi mdi-human-cane'},
    {name: 'Renato', icon: 'mdi mdi-teddy-bear'},
    {name: 'Manco', icon: 'mdi mdi-teddy-bear'}
]

export function activatedOn(index, data) {
    data.forEach((item)=> item.isActive = false)
    data[index].isActive = true
}
 