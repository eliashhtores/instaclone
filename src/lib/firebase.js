// import { seedDatabase } from '../seed'

const config = {
    apiKey: 'AIzaSyBRLA5xZIgBHRq8K48Gazk7Uct08Y0YVk0',
    authDomain: 'instaclone-89595.firebaseapp.com',
    projectId: 'instaclone-89595',
    storageBucket: 'instaclone-89595.appspot.com',
    messagingSenderId: '839195075127',
    appId: '1:839195075127:web:bb70c47f9b2910d1ae55b2',
}

const firebase = window.firebase.initializeApp(config)
const { FieldValue } = window.firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }
