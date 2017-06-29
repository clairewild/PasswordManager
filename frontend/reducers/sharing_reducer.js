import React from 'react';

const preloadedState = [
  {
    "website": "netflix.com",
    "username": "johndoeandchill",
    "password_id": "(*#$2k$SSD",
    "borrower_user_id": "thefriendofjohndoe"
  },
  {
    "website": "play.hbogo.com",
    "username": "johndoewatchesgameofthrones",
    "password_id": "23789$$SSD",
    "borrower_user_id": "gotfan"
  }
];

const SharingReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default SharingReducer;
