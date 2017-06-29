import React from 'react';

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
  switch(action.type) {
    default:
      return state;
  }
};

export default CredentialsReducer;
