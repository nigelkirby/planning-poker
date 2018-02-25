import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDeqzbb4kqJZV9oT_S_teCwYwJWmHbSjoM',
  authDomain: 'planning-poker-e74c3.firebaseapp.com',
  databaseURL: 'https://planning-poker-e74c3.firebaseio.com',
  projectId: 'planning-poker-e74c3',
  storageBucket: 'planning-poker-e74c3.appspot.com',
  messagingSenderId: '415455387466',
}
firebase.initializeApp(config)
export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()
