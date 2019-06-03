function googleLogin2() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;

            
            console.log('Successful google login2.')
        })
        .catch(console.log)
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var name = user.displayName.toString();
        $('#customername').text(", " + name);
         document.getElementById('loginmethod').style.display = "none";
         document.getElementById('checkout').style.display = "block";
        console.log('User is logged in.')
        // ...
    } else {
        console.log('User is not logged in.');
        // ...
    }
    // ...
});

function anonLogin() {
    firebase.auth().signInAnonymously().catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    console.log("Successful email login.")
    document.getElementById('loginmethod').style.display = "none";

    $('.pinContact').css({
        'display': 'block'
    });

}