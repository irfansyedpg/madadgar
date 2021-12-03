

importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyAN58VpcqVMwoke1GON5s2YBXJWw3YVs0o",
    authDomain: "pdmamadadgar-1d65a.firebaseapp.com",
    projectId: "pdmamadadgar-1d65a",
    storageBucket: "pdmamadadgar-1d65a.appspot.com",
    messagingSenderId: "231389258164",
    appId: "1:231389258164:web:2d4358f1a7cc0d0cac92e1",
    measurementId: "G-EG6J57JFQ7"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/assets/images/p.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});