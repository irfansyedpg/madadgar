










var firebaseConfig = {
    apiKey: "AIzaSyAN58VpcqVMwoke1GON5s2YBXJWw3YVs0o",
    authDomain: "pdmamadadgar-1d65a.firebaseapp.com",
    projectId: "pdmamadadgar-1d65a",
    storageBucket: "pdmamadadgar-1d65a.appspot.com",
    messagingSenderId: "231389258164",
    appId: "1:231389258164:web:2d4358f1a7cc0d0cac92e1",
    measurementId: "G-EG6J57JFQ7"

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
            'Authorization': 'key=' + "AAAANd_f4bQ:APA91bFwAO1pJpw7Uj85Sa_NwBYP_XEn7FJyXg3E0I1JfBJYWiomf2l2gRNGDFiYBhhRiDlLva_A-cl6oFaHH77z2pFMoo7VjP4r1JdeX_CmjNuBp3y57WeE6YQgAzg2GcGiVnI06Kd3 "
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