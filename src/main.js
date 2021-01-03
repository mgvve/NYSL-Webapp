import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUCvDwnKNecygXcaYzyQxYKbbuSOwXJMk",
    authDomain: "nysl-webapp-mgvve.firebaseapp.com",
    databaseURL: "https://nysl-webapp-mgvve.firebaseio.com",
    projectId: "nysl-webapp-mgvve",
    storageBucket: "nysl-webapp-mgvve.appspot.com",
    messagingSenderId: "380721590136",
    appId: "1:380721590136:web:a685ff7bfa550605e8628d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
