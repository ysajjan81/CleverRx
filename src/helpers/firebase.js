import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC08O5gdf0deIHAa8am6z9E4gWVZ-WVwiY',
  authDomain: 'ethiopia-80361.firebaseapp.com',

  projectId: 'ethiopia-80361',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
export default auth;
