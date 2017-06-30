import React from 'react';

const preloadedState = [
  {
    "id": 7,
    "website": "youtube.com",
    "username": "macklemore299",
    "password_id": "(*#$2k$SSD",
    "lender_user_id": "macklemore"
  },
  {
    "id": 8,
    "website": "hulu.com",
    "username": "lorenzo789",
    "password_id": "23789$$SSD",
    "lender_user_id": "lorenzochello"
  }
];

const SharedReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default SharedReducer;
