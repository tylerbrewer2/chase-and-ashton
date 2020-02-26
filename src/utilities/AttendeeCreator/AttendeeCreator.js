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
    errorMessage = 'There was an issue with the request. Please try again or contact Tyler or Morgan with the "Error Id" if failure continues.',
  }) {
    if (!this.attendee.firstName && !this.attendee.lastName) { return }

    let response;
    try {
      response =
        await firebase.database()
                      .ref(`attendees/${this.attendee.firstName}${this.attendee.lastName}`)
                      .set(this.attendee)
                      .then(() => (
                        {
                          status: 'success',
                          message: successMessage,
                        }
                      ));
    } catch(error) {
      response = this.handleError(error, errorMessage);
    }

   return response;
  }
}