export const allObject = function(own_credentials, shared_with_me, shared_with_others) {
  const result = {};
  own_credentials.forEach(credential => {
    result[credential.website] = credential;
  });
  shared_with_me.forEach(borrow => {
    if (result[borrow.website]) {
      result[borrow.website]["lender_user_id"] = borrow.lender_user_id;
    }
    else {
      result[borrow.website] = borrow;
    }
  });
  shared_with_others.forEach(lend => {
    if (result[lend.website]) {
      result[lend.website]["borrower_user_id"] = lend.borrower_user_id;
    }
    else {
      result[lend.website] = lend;
    }
  });
  return result;
}

export const simpleObject = function(array) {
  const result = {};
  array.forEach(credential => {
    result[credential.website] = credential;
  });
  return result;
}
