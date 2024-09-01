import {ref} from 'vue'



const widthScreen = window.innerWidth

export const cards = ref(0)

export const booksList = ref([
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Aventura'},
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Ação'},
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Romance'},
  {books: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Ficção'}
])

export function goDirection(direction, data) {
    if (direction == 'r') {
      data.right += 140
    } else if (direction == 'l') {
      data.right -= 140
    }
    console.log(data.right)
  }