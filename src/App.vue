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
    import firebase from "../firebase";

    export default {
        name: "App",
        components: {Footer, Navbar},
        created() {
            Notification.requestPermission().then(function(result) {
                if(result === 'granted') {
                    firebase.messaging().getToken().then((currentToken) => {
                        if (currentToken) {
                            sendTokenToServer(currentToken);
                            updateUIForPushEnabled(currentToken);
                        } else {
                            // Show permission request.
                            console.log('No Instance ID token available. Request permission to generate one.');
                            // Show permission UI.
                            updateUIForPushPermissionRequired();
                            setTokenSentToServer(false);
                        }
                    }).catch((err) => {
                        console.log('An error occurred while retrieving token. ', err);
                        showToken('Error retrieving Instance ID token. ', err);
                        setTokenSentToServer(false);
                    });
                }
            });

            firebase.messaging().onTokenRefresh(() => {
                messaging.getToken().then((refreshedToken) => {
                    console.log('Token refreshed.');
                    // Indicate that the new Instance ID token has not yet been sent to the
                    // app server.
                    setTokenSentToServer(false);
                    // Send Instance ID token to app server.
                    sendTokenToServer(refreshedToken);
                    // ...
                }).catch((err) => {
                    console.log('Unable to retrieve refreshed token ', err);
                    showToken('Unable to retrieve refreshed token ', err);
                });
            });
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
                messaging.requestPermission()
                    .then(() => {
                        this.getMessagingToken();
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
                            this.saveToken(token);
                        }).catch(function(err) {
                            console.log('Unable to retrieve refreshed token ', err);
                        });
                    });
                }
            },
            saveToken(token) {
                console.log('tokens', token)
                axios.post(`https://us-central1-cropchien.cloudfunctions.net/GeneralSubscription`,{ token })
                    .then(response => {
                        window.localStorage.setItem('messagingToken',token)
                        console.log(response)
                    }).catch((err) => {
                    console.log(err)
                })
            },
        }
    }
</script>

<style scoped>

</style>
