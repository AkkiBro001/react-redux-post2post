import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/user"
const Store = configureStore({
    reducer: {
        users: usersReducer,
    }
})

export default Store;
