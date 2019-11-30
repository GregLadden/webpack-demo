import User from './testing'

// const helloYou = hello()
const greg = new User('Greg', 'Ladden')

document.getElementById('testing').addEventListener('click', () => {
  return alert(`${greg.firstName} ${greg.lastName} is ${greg.userAge(2019,1985)}`)
})
