export const RECEIVE_LEND = 'RECEIVE_LEND';
export const REMOVE_LEND = 'REMOVE_LEND';

export const receiveLend = credential => ({
  type: RECEIVE_LEND,
  credential
});

export const removeLend = credential => ({
  type: REMOVE_LEND,
  credential
});
