import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApNXOvpytSK19hXZ4wE6F2QQymGQz6VHI",
  authDomain: "blog-triggers-a6n3ca.firebaseapp.com",
  projectId: "blog-triggers-a6n3ca",
  storageBucket: "blog-triggers-a6n3ca.appspot.com",
  messagingSenderId: "111340812772",
  appId: "1:111340812772:web:0d4529f9dad1525b306ff1"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export { firebaseConfig }