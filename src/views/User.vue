<template>
  <div>
      <template v-if="user == null">
          <button @click="login()">Login with your Google Account</button>
      </template> 
      <template v-else>
          <button>My Games</button>
          <button>My Schedule</button>
          <button @click="logout()">Logout</button>
      </template>

  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';


export default {
    name: 'User',
    data(){
        return {
            user: null
        }
    },
    methods: {
        login(){
            let provider = new firebase.auth.GoogleAuthProvider()
            
            firebase
            .auth()
            .signInWithPopup(provider)
            .then (result => {
                this.user = result.user
            })
            .catch(error => {
                console.log (error.code)
            })
        },
        logout(){

        }
    },
    
}
</script>

<style>

</style>