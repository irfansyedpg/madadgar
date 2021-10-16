










var firebaseConfig = {
apiKey: "AIzaSyBoP8U_54eM4EngHDBb7bgsVSks-NEBZnU",
authDomain: "pdmamadadgar.firebaseapp.com",
projectId: "pdmamadadgar",
storageBucket: "pdmamadadgar.appspot.com",
messagingSenderId: "750457853335",
appId: "1:750457853335:web:cf4338e2a8e1418f6120d2",
measurementId: "G-5NS6D9DXZP"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging
    .requestPermission()
    .then(function () {

        console.log('Notification permission granted.');

        // get the token in the form of promise
        return messaging.getToken();
    })
    .then(function (token) {

        console.log("token="+token)

    })
    .catch(function (err) {

        console.log('Unable to get permission to notify.', err);
    });

// let enableForegroundNotification = true;
// messaging.onMessage(function (payload) {
//     console.log('Message received. ', payload);
//          alert( JSON.stringify(payload));


//     if (enableForegroundNotification) {
//         let notification = payload.notification;
//         navigator.serviceWorker
//             .getRegistrations()
//             .then((registration) => {
//                 registration[0].showNotification(notification.title);
//             });
//     }
// });