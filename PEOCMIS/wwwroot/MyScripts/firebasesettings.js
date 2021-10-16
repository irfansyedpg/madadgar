










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

      //  console.log("token=" + token)

        subscribeTokenToTopic(token, "report");

    })
    .catch(function (err) {

        console.log('Unable to get permission to notify.', err);
    });





function subscribeTokenToTopic(token, topic) {
    fetch('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'key=' + "AAArrrGFZc:APA91bEAL5wkVuqZ8EDeLkTbm7M5TycRgfE8zSwuncmCxpzEL-E4FGb1x2N6OYtdFwSak7lcLojbXhHGnRWW6muZaQ0KVp4CJIRVCyOHpdVrhgHPsu9qkwK6F4RKlrQYCAqnva62z5Dr"
        })
    }).then(response => {
        if (response.status < 200 || response.status >= 400) {
            throw 'Error subscribing to topic: ' + response.status + ' - ' + response.text();
        }
        //console.log('Subscribed to "' + topic + '"');
    }).catch(error => {
        console.error(error);
    })
}


let enableForegroundNotification = true;
messaging.onMessage(function (payload) {
  //  console.log('Message received. ', payload);

    const fcmdata = payload['notification']['title'];


    toastr["success"]("New record Upload ", fcmdata);


    playsound();
    FnLoadData("0", "0", "0");
    GetData();

    if (enableForegroundNotification) {
        let notification = payload.notification;
        navigator.serviceWorker
            .getRegistrations()
            .then((registration) => {
                registration[0].showNotification(notification.title);
            });
    }
});


function playsound() {



    /* Audio link for notification */
    var mp3 = '<source src="/Media/bellsound.mp3" type="audio/mpeg">';
    document.getElementById("sound").innerHTML =
        '<audio autoplay="autoplay">' + mp3 + "</audio>";
}