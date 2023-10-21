import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

declare global {
  interface Window {
    Pusher:any;
    Echo:any;
  }
}

export default defineNuxtPlugin(() => {
  window.Pusher = Pusher
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'ASDASD2121',
    wsHost: window.location.hostname,
    wsPort: 6001,
    cluster: 'mt1',
    forceTLS: false
  })
})