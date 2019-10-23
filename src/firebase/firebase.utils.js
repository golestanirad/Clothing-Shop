import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH-XTalPNOF-B2bzAlSjdqzLMI7S1gCqM",
  authDomain: "crwn-db-2c9dc.firebaseapp.com",
  databaseURL: "https://crwn-db-2c9dc.firebaseio.com",
  projectId: "crwn-db-2c9dc",
  storageBucket: "",
  messagingSenderId: "997768094146",
  appId: "1:997768094146:web:7500aaac888d04e3acb65b"
};
firebase.initializeApp(firebaseConfig);

export const creatUserProfileDocument = async (userAuth, additionData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
 
  const userShot = await userRef.get();
 
  if (!userShot.exists) {
   
    const { displayName, email } = userAuth;
   
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      });
    
    } catch (error) {
    
    }
  }
 
  const test = await userRef.get();

 

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
