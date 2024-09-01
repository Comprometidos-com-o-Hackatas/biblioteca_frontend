import {ref} from 'vue'


export function goDirection(direction, data) {
    if (direction == 'r') {
      data.right += 140
    } else if (direction == 'l') {
      data.right -= 140
    }
    console.log(data.right)
  }