import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const authSlice = createSlice({
    name: 'auth',
    initialState: {name: null, token: null},
    reducers: {
        setCredentials(state, action){
            localStorage.setItem('credentials', 
            JSON.stringify({
                name: action.payload.user.name,
                token: action.payload.token
            })
            )
            state.name = action.payload.user.name;
            state.token = action.payload.token;
        },
        logOut(state, action){
            state.name = null;
            state.token = null;
        }
    },
})


export const {setCredentilas, logOut} = authSlice.actions;
export default authSlice.reducer

export const setCurrentuser = (state) => state.auth.user
export const setCurrentToken = (state) => state.auth.token