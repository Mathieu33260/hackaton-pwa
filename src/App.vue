<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";
    import firebase from './configFirebase';

    const { messaging } = firebase;

    export default {
        name: "App",
        components: {Footer, Navbar},
        mounted() {
            this.listenTokenRefresh();
            this.getMessagingToken();
        },
        methods: {
            getMessagingToken () {
                messaging.getToken().then(async (token) => {
                    if (token) {
                        const currentMessageToken = window.localStorage.getItem('messagingToken')
                        console.log('token will be updated', currentMessageToken != token)
                        if(currentMessageToken != token){
                            await this.saveToken(token)
                        }
                    } else {
                        console.log('No Instance ID token available. Request permission to generate one.');
                        this.notificationsPermisionRequest();
                    }
                }).catch(function(err) {
                    console.log('An error occurred while retrieving token. ', err);
                });
            },
            notificationsPermisionRequest () {
                Notification.requestPermission()
                    .then((result) => {
                        if(result === 'granted') {
                            this.getMessagingToken();
                        } else {
                            console.log('User don\'t want to be notified');
                        }
                    })
                    .catch((err) => {
                        console.log('Unable to get permission to notify.', err);
                    });
            },
            listenTokenRefresh() {
                const currentMessageToken = window.localStorage.getItem('messagingToken')
                console.log('currentMessageToken', currentMessageToken);
                if(!!currentMessageToken){
                    messaging.onTokenRefresh(function() {
                        messaging.getToken().then(function(token) {

                        }).catch(function(err) {
                            console.log('Unable to retrieve refreshed token ', err);
                        });
                    });
                }
            },
        }
    }
</script>

<style scoped>

</style>
