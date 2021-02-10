import { types } from "../constants/types";

export const checkSession = () => {
  return (dispatch) => {
    const userName = localStorage.getItem("userName");
    const email = localStorage.getItem("email");

    if (userName && email) {
      dispatch(loginAction({ userName, email }));
    } else {
      dispatch(logOutAction());
    }
  };
};

export const startLogin = (user) => {
  return (dispatch) => {
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("email", user.email);
    dispatch(loginAction(user));
  };
};

const loginAction = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const logOutAction = () => ({
  type: types.authLogOut,
});
