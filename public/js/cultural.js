function authStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let uid = user.uid;
        } else {
            signOut();
            location.href = 'login.html';
        }
    });
}

window.addEventListener('load', function () {
    authStateListener();

    document.getElementById('sign-out').addEventListener('click', function () {
        signOut();
    });


});

function signOut() {
    firebase.auth().signOut().then(() => {

    }).catch((error) => {

        console.log("error",error);
    });
}