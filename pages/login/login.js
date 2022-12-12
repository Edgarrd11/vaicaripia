    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 
    const firebaseConfig = {
      apiKey: "AIzaSyCqjQM2ZtgNYKY-euRXBsKz5FVPi4TayFc",
      authDomain: "usuarios-5177f.firebaseapp.com",
      projectId: "usuarios-5177f",
      storageBucket: "usuarios-5177f.appspot.com",
      messagingSenderId: "508392545911",
      appId: "1:508392545911:web:6b24fb824bd9877051b072"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const database = getDatabase(app);

  

    submitData.addEventListener('click', (e) => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        /*createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password
            })
            .then(() => {
                alert('user created successfully');
            })
            .catch((error) => {
                alert(error);
            });
        })
        
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });*/
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user =userCredential.user
        var lgDate = new Date();
        update(ref(database, 'users/' + user.uid), {
                last_login: lgDate,

            })
            .then(() => {
                alert('user logged in successfully');
            })
            .catch((error) => {
                alert(error);
            });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
    signOut(auth).then(() => {

    }).catch((error) => {

    });
});

    