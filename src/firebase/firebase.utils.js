import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyAwBEcn_ONqNkCE_GgsjNl9DWovp-hZ7sI",
    authDomain: "crwn-db-9dbcc.firebaseapp.com",
    projectId: "crwn-db-9dbcc",
    storageBucket: "crwn-db-9dbcc.appspot.com",
    messagingSenderId: "534986569128",
    appId: "1:534986569128:web:244bf968d1afb9c7fe999d",
    measurementId: "G-88B90Q1HHP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();  

    if(!snapShot.exists) {
        const { displayName, email } = userAuth; 
        const createdAt = new Date(); 

        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message); 
        }
    }

    return userRef; 

}; 


firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 