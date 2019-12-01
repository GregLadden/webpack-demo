import User from './testing'
import './scss/style.scss'
import heroImg from './assets/img/Hero.jpg'

// const helloYou = hello()
const greg = new User('Greg', 'Ladden')

document.getElementById('testing').addEventListener('click', () => {
  return alert(`${greg.firstName} ${greg.lastName} is ${greg.userAge(2019,1985)}`)
})

if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
       navigator.serviceWorker.register('/service-worker.js').then(registration => {
         console.log('SW registered: ', registration);
       }).catch(registrationError => {
         console.log('SW registration failed: ', registrationError);
       });
     });
   }