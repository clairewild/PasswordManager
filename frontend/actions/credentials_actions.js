export const RECEIVE_CREDENTIAL = 'RECEIVE_CREDENTIAL';
export const REMOVE_CREDENTIAL = 'REMOVE_CREDENTIAL';

export const receiveCredential = credential => ({
  type: RECEIVE_CREDENTIAL,
  credential
});

export const removeCredential = credential => ({
  type: REMOVE_CREDENTIAL,
  credential
});
