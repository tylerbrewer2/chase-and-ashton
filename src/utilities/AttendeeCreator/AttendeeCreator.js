import firebase from 'firebase';
import ErrorLogger from '../ErrorLogger';

export default class AttendeeGenerator {
  constructor(attendee){
    this.attendee = attendee;
    this.initializeFirebase();
  }

  initializeFirebase = () => {
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    }

    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
      firebase.auth().signInAnonymously();
    }
  }

  generateErrorId() {
    return `Error Id: ${Math.random().toString(36).substring(7)}`;
  }

  handleError(error, errorMessage) {
    const errorId = this.generateErrorId();
    ErrorLogger.log(error, { user: this.attendee });

    return {
      status: 'error',
      message: `${errorId}: ${errorMessage}`,
    }
  }

  async create({
    successMessage = 'Request was successful.',
    errorMessage = 'There was an issue with the request. Please try again and contact Chase or Ashton if failure continues.',
  }) {
    if (!this.attendee.firstName && !this.attendee.lastName) { return }

    debugger;
    // Default options are marked with *
    return await fetch("http://206.189.189.244:8080/rsvps/new", {
      body: JSON.stringify(this.attendee),
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      console.log('response');
      console.log(response);
      debugger;
      return response.json(); // parses JSON response into native JavaScript objects
    })
    .then((data) => {
      debugger;
      // response = data
      console.log(data); // JSON data parsed by `response.json()` call
      return {
        status: 'success',
        message: successMessage,
      };
    })
    .catch((error) => {
      return this.handleError(error, errorMessage)
    });
  }
}
