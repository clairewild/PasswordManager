import React from 'react';
import merge from 'lodash/merge';

import { RECEIVE_LEND, REMOVE_LEND } from '../actions/lending_actions.js';

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

const LendingReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  const newState = merge([], state);
  switch(action.type) {
    case RECEIVE_LEND:
      newState.push(action.credential);
      return newState;
    case REMOVE_LEND:
      const i = newState.indexOf(action.credential);
      if (i > -1) {
        newState.splice(i, 1)
      }
      return newState;
    default:
      return state;
  }
};

export default LendingReducer;
