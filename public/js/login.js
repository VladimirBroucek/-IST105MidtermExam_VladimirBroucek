function authStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            location.href = 'culturalconnections.html';
        } else {

        }
    });
}

window.addEventListener('load', function () {

    authStateListener();

    document.getElementById('sign-google').addEventListener('click', function () {

        let provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                location.href = 'culturalconnections.html';
            })
            .catch(function (error) {
                console.log('Logging fail', error);
            });
    });

    document.getElementById('sign-email').addEventListener('click', function () {

        let emailTxt = document.getElementById('email').value;
        let passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                // ...
                console.log('Logging sucessfully');
                location.href = 'culturalconnections.html';
            })
            .catch((error) => {
                let errorMessage = error.message;
                console.log('Logging fail', errorMessage);
            });

    });
});