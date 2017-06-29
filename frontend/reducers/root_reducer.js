import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  own_credentials: CredentialsReducer,
  shared_with_me: SharedReducer,
  shared_with_others: SharingReducer,
  user: UserReducer
});

export default RootReducer;
