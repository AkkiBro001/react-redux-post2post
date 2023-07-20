import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: JSON.parse(localStorage.getItem('users')) || [],
    reducers: {
        addUser: (state, action) => {
            state.push({userID: Date.now(), name: action.payload.name, isLogged: false, password: action.payload.password})
            localStorage.setItem('users', JSON.stringify(state))
        },
        setLogged(state, action){
            const users = state.map(user => user.userID === action.payload ? {...user, isLogged: true} : user)
            localStorage.setItem('users', JSON.stringify(users))
            return users
        },
        setLoggedOut(state, action){
            const users = state.map(user => user.userID === action.payload ? {...user, isLogged: false} : user)
            localStorage.setItem('users', JSON.stringify(users))
            return users
        }
    }
});

export default UserSlice.reducer;
export const {addUser, setLogged, setLoggedOut} = UserSlice.actions;

