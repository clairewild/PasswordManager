import React from 'react';
import merge from 'lodash/merge';

import { RECEIVE_CREDENTIAL, REMOVE_CREDENTIAL } from '../actions/credentials_actions.js';

const preloadedState = [
  {
    "website": "google.com",
    "username": "johndoe@gmail.com",
    "password_id": "#jknkjndsjk$SSD"
  },
  {
    "website": "facebook.com",
    "username": "johndoe@gmail.com",
    "password_id": "nnjnnnc#D"
  },
  {
    "website": "reddit.com",
    "username": "thejohndoe",
    "password_id": "#)_2-==23D"
  },
  {
    "website": "wellsfargo.com",
    "username": "johndoebanks",
    "password_id": "iuh!@@22"
  },
  {
    "website": "netflix.com",
    "username": "johndoeandchill",
    "password_id": "(*#$2k$SSD"
  },
  {
    "website": "play.hbogo.com",
    "username": "johndoewatchesgameofthrones",
    "password_id": "23789$$SSD"
  }
];

const CredentialsReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  const newState = merge([], state);
  switch(action.type) {
    case RECEIVE_CREDENTIAL:
      newState.forEach((credential, i) => {
        if (credential.website === action.credential.website) {
          newState[i] = action.credential;
          return newState;
        }
      });
      newState.push(action.credential);
      return newState;
    case REMOVE_CREDENTIAL:
      const i = newState.indexOf(action.credential);
      if (i > -1) {
        newState.splice(i, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default CredentialsReducer;
