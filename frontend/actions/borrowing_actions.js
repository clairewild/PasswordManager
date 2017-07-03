export const RECEIVE_BORROW = 'RECEIVE_BORROW';
export const REMOVE_BORROW = 'REMOVE_BORROW';

export const receiveBorrow = credential => ({
  type: RECEIVE_BORROW,
  credential
});

export const removeBorrow = credential => ({
  type: REMOVE_BORROW,
  credential
});
