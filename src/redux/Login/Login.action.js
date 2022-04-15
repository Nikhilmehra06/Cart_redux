export const USER_LOGIN = 'USER_LOGIN';

export const userlogin = (payload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};
