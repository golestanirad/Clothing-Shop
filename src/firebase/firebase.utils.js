import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
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
