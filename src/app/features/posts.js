import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
    name: 'posts',
    initialState: JSON.parse(localStorage.getItem('posts')) || [],
    reducers: {
        addPost: {
            reducer(state, action){
                state.push(action.payload)
                
            },
            prepare(post, userID){
                return{
                    payload:{
                        postID: nanoid(),
                        post,
                        date: new Date().toISOString(),
                        userID,
                        postLikeByUser: [],
                        postDislikeByUser: [],
                        likeCount: 0,
                        disLikeCount: 0,
                        isEditedPost: false,
                    }
                }
            }
        },

        likePost: (state, action) => {
            return state.map(post =>{
                if(post.postID === action.payload.postID){
                    if(post.postLikeByUser.includes(action.payload.activeUserID)){
                        return {...post,
                                postLikeByUser: post.postLikeByUser.filter(id => id !==  action.payload.activeUserID),
                                likeCount: post.likeCount - 1
                            }
                    }else{
                        if(post.postDislikeByUser.includes(action.payload.activeUserID)){
                            return {...post, 
                                postLikeByUser: [...post.postLikeByUser, action.payload.activeUserID],
                                postDislikeByUser: post.postDislikeByUser.filter(id => id !==  action.payload.activeUserID),
                                likeCount: post.likeCount + 1,
                                disLikeCount: post.disLikeCount - 1,
                            }
                        }
                        return {...post, 
                            postLikeByUser: [...post.postLikeByUser, action.payload.activeUserID],
                            likeCount: post.likeCount + 1
                        }
                    }
                }else{
                    return post
                }
            })
        },

        dislikePost: (state, action) => {
            return state.map(post =>{
                if(post.postID === action.payload.postID){
                    if(post.postDislikeByUser.includes(action.payload.activeUserID)){
                        return {...post, 
                            postDislikeByUser: post.postDislikeByUser.filter(id => id !==  action.payload.activeUserID),
                            disLikeCount: post.disLikeCount - 1
                        }
                    }else{
                        if(post.postLikeByUser.includes(action.payload.activeUserID)){
                            return {...post, 
                                postDislikeByUser: [...post.postDislikeByUser, action.payload.activeUserID],
                                postLikeByUser: post.postLikeByUser.filter(id => id !==  action.payload.activeUserID),
                                likeCount: post.likeCount - 1,
                                disLikeCount: post.disLikeCount + 1,
                            }
                        }
                        return {...post, 
                            postDislikeByUser: [...post.postDislikeByUser, action.payload.activeUserID],
                            disLikeCount: post.disLikeCount + 1
                        }
                    }
                }else{
                    return post
                }
            })
        },

        deletePost: (state, action) => {
            return state.filter(post => post.postID !== action.payload)
        },
        editPost: (state, action) => {
            
            return state.map(post => {
               
                if(post.postID === action.payload.postID){
                    return {
                        ...post,
                        post: action.payload.post,
                        date: new Date().toISOString(),
                        postLikeByUser: [],
                        postDislikeByUser: [],
                        likeCount: 0,
                        disLikeCount: 0,
                        isEditedPost: true,
                    }
                }else{
                    return post;
                }
            })
        }
    }
})


export default PostsSlice.reducer;
export const {addPost, likePost, dislikePost, deletePost, editPost} = PostsSlice.actions;