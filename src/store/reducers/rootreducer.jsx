import authreducer from './authreducer';
import detailsreducer from './detailsreducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootreducer = combineReducers({
    auth: authreducer,
    details: detailsreducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootreducer;