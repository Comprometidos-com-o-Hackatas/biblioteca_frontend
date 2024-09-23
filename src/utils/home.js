import {onMounted, ref} from 'vue'


export function goDirection(direction, data) {
    if (direction == 'r') {
      data.right += 140
    } else if (direction == 'l') {
      data.right -= 140
    }
    console.log(data.right)
  }

  export const widthScreen = window.innerWidth

  export const updateBookList = () =>{
    booksList.value.forEach((idle, index) => {
       booksList.value[index].sizeShow = (booksList.value[index].books.length - ((widthScreen*0.85) / 220))*220
       console.log(booksList.value[index].sizeShow)
    });
   }

export const booksList = ref([
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Aventura', location: 'A'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Ação', location: 'B'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Romance', location: 'C'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Ficção', location: 'D'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Fantasia', location: 'E'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Mistério', location: 'F'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Comédia', location: 'G'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Poema', location: 'H'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Histórico', location: 'I'},
    {books: [], right: 0, sizeShow: (0 - ((widthScreen*0.85) / 220))*220, title: 'Suspense', location: 'J'},
  ])


