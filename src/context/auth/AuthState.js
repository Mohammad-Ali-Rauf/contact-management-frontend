import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    CLEAR_ERRORS
} from "../types";

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = () => {

    }
    // Register User
    const regsiterUser = () => {
        
    };
    // Login User
    const loginUser = () => {

    }
    // Logout User
    const logoutUser = () => {
        
    }
    // Clear Errors
    const clearErrors = () => {

    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                loadUser,
                regsiterUser,
                loginUser,
                logoutUser,
                clearErrors,
            }}>
            {props.children}
        </authContext.Provider>
    );
};

export default AuthState;