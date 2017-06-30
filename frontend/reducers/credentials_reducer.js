import React from 'react';

const preloadedState = [
  {
    "id": 1,
    "website": "google.com",
    "username": "johndoe@gmail.com",
    "password_id": "#jknkjndsjk$SSD"
  },
  {
    "id": 2,
    "website": "facebook.com",
    "username": "johndoe@gmail.com",
    "password_id": "nnjnnnc#D"
  },
  {
    "id": 3,
    "website": "reddit.com",
    "username": "thejohndoe",
    "password_id": "#)_2-==23D"
  },
  {
    "id": 4,
    "website": "wellsfargo.com",
    "username": "johndoebanks",
    "password_id": "iuh!@@22"
  },
  {
    "id": 5,
    "website": "netflix.com",
    "username": "johndoeandchill",
    "password_id": "(*#$2k$SSD"
  },
  {
    "id": 6,
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
