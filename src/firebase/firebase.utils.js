import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
        apiKey: "AIzaSyD_r-TaLVyyDrsieEDs1YwVHEbj87BgI8c",
        authDomain: "e-commerce-7e0d9.firebaseapp.com",
        databaseURL: "https://e-commerce-7e0d9.firebaseio.com",
        projectId: "e-commerce-7e0d9",
        storageBucket: "e-commerce-7e0d9.appspot.com",
        messagingSenderId: "247557599208",
        appId: "1:247557599208:web:b2a854b0ce5f943d7fbe5d",
        measurementId: "G-RCD67VLPGE"
      };

   firebase.initializeApp(config);

   export const createUserProfileDocument = async (userAuth, additionalData) => {
     if (!userAuth) return;
   
     const userRef = firestore.doc(`users/${userAuth.uid}`);
   
     const snapShot = await userRef.get();
   
     if (!snapShot.exists) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();
       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         });
       } catch (error) {
         console.log('error creating user', error.message);
       }
     }
   
     return userRef;
   };


   export const addCollectionAndDocuments= async (collectionKey, objectsToAdd) => {
     const collectionRef = firestore.collection(collectionKey)
    
     const batch = firestore.batch()
     objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        console.log(newDocRef)
        batch.set(newDocRef, obj)
     })
     return await batch.commit();
   }

   export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
     const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
       const {title, items} = docSnapshot.data()

       return {
         routeName: encodeURI(title.toLowerCase()),
         id:
         docSnapshot.id,
         title,
         items
       }
     })
     return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator
    }, {})
    }


   export const auth = firebase.auth();
   export const firestore = firebase.firestore();
   
   export const googleProvider = new firebase.auth.GoogleAuthProvider();
   googleProvider.setCustomParameters({ prompt: 'select_account' });
   export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
   
   export default firebase;