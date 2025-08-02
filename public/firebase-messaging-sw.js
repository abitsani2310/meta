importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyA3P17vMsbFT42cnhS-UWNLFtbj5P7Pwj8",
  authDomain: "sorbannagacom.firebaseapp.com",
  databaseURL: "https://sorbannagacom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sorbannagacom",
  storageBucket: "sorbannagacom.appspot.com", // ✅ perbaiki ini
  messagingSenderId: "174066720496",
  appId: "1:174066720496:web:d1cba570b05604f4d0ec35",
  measurementId: "G-09SGN4L4J0"
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