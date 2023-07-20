import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users"
import postsReducer from "./features/posts"
const Store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
    }
})

export default Store;
