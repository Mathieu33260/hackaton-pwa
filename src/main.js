import Vue from 'vue'
import router from './router';
import './registerServiceWorker';
import App from "./App";
import firebase from 'firebase';

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyBYtFR3c1xl7n5c8nac3HjJiX4ZN4W_Yh0",
  authDomain: "neos-71307.firebaseapp.com",
  messagingSenderId: "106265079673",
};
firebase.initializeApp(config);
firebase.messaging().usePublicVapidKey("BLHXJFKF3n77h98iRvRWCacWwQWreTVX92Qh1AHwSreopdqcAh2pW1jBVotOdC3Rf_NIGHj_IUlmbsNzG_L_xk8");

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
