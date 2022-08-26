import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyDMRFMnjSfexmCTfjRB3DQtQB5tQgTgye4',
   authDomain: 'yt-clone-ea6a5.firebaseapp.com',
   projectId: 'yt-clone-ea6a5',
   storageBucket: 'yt-clone-ea6a5.appspot.com',
   messagingSenderId: '291325301429',
   appId: '1:291325301429:web:ec32de453c0ef9a7d924fc',
}
firebase.initializeApp(firebaseConfig)

export default firebase.auth()
