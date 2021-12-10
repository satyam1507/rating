/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDEdz66dkUIO92UMjCuP2zH4rnWATip3Zk',
  authDomain: 'rating-app-d52c1.firebaseapp.com',
  projectId: 'rating-app-d52c1',
  storageBucket: 'rating-app-d52c1.appspot.com',
  messagingSenderId: '43031590425',
  appId: '1:43031590425:web:9cac5cdf4e0b9c217e9c88',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db};