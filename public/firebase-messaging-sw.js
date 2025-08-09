importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyA3P17vMsbFT42cnhS-UWNLFtbj5P7Pwj8",
  authDomain: "sorbannagacom.firebaseapp.com",
  projectId: "sorbannagacom",
  storageBucket: "sorbannagacom.firebasestorage.app",
  messagingSenderId: "174066720496",
  appId: "1:174066720496:web:daa13a398a7626c1d0ec35",
  measurementId: "G-F281QXMT7T"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});