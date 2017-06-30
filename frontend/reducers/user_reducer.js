import React from 'react';

const preloadedState = {
  "username": "johndoe19",
  "name": "John Doe"
};

const UserReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default UserReducer;
