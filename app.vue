<template>
  <h1>mensajes</h1>
    <tr v-for="mensaje in mensajes" :key="mensaje.id">
	    <th scope="row">{{ mensaje.name+":" }}</th>
      <th scope="row">{{ mensaje.message }}</th>
    </tr>
</template>
 
<script>
import axios from 'axios';
export default {
data() {
    return {
      mensajes: [],
    };
  },
methods: {
    async getMensajes() {
        //Obtener los mensajes de la base de datos
        const response = await axios.get('http://localhost:8000/api/messages');
        console.log('gaaaaa');
        console.log('response',response);
        console.log('status',response.status);
        if(response.status === 200) {
            this.mensajes = response.data.data
            
			console.log(this.mensajes);
	    }
    },
  },
mounted () {
    this.getMensajes();
    window.Echo.channel('home').listen('NewMessage', (mensaje__socket) => {
      console.log(mensaje__socket)
      console.log('EL STATUS:', mensaje__socket.status);
      console.log('LA DATA:', mensaje__socket.data);
      if(mensaje__socket.status === true){
        this.getMensajes();
      }
    })
  }
}
</script>
