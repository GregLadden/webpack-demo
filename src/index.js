import { hello } from './testing'

const helloYou = hello()

document.getElementById('testing').addEventListener('click', () => {
  alert("testing")

  console.log(helloYou)
})
