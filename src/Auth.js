import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDYRmal2kfORXcyKBrAD73xsdNzkSACrQ0",
    authDomain: "imageupload-eb8f7.firebaseapp.com",
    projectId: "imageupload-eb8f7",
    storageBucket: "imageupload-eb8f7.appspot.com",
    messagingSenderId: "820962073033",
    appId: "1:820962073033:web:2b6dea4debb546bbd13018",
    measurementId: "G-4HH0VPXS63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageUploade = getStorage(app)