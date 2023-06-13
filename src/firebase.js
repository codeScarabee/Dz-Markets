// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2dwuVNFJRajHHdwFyTMwHuS0_ASaMuXo',
  authDomain: 'dz-market-react.firebaseapp.com',
  projectId: 'dz-market-react',
  storageBucket: 'dz-market-react.appspot.com',
  messagingSenderId: '609430971559',
  appId: '1:609430971559:web:b6fbff526eb023274fa782',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
