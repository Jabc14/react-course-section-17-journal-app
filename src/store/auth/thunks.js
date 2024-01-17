import {
  signWithEmail,
  signWithGoogle,
  loginWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { checkignCredentials, login, logout } from "./authSlice";

export const checkingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(checkignCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkignCredentials());

    const result = await signWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    return dispatch(login(result));
  };
};

export const startEmailSignIn = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkignCredentials());

    const result = await signWithEmail({ email, password, displayName });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startLoginWithEmail = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkignCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  };
};
