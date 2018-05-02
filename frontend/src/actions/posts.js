import * as postsAPI from '../utils/postsApi'

import {
    FETCH_POSTS,
    FETCH_POST,
    CREATE_POST,
    UPDATE_POST,
    VOTE_POST,
    DELETE_POST
} from './constants'

const fetchPostsAction = (posts) => ({
    type: FETCH_POSTS,
    posts
})

export const fetchPosts = () => dispatch => {
    postsAPI.fetchPosts()
        .then(posts => dispatch(fetchPostsAction(posts)));
}

const fetchPostAction = (post) => ({
    type: FETCH_POST,
    post
})

export const fetchPost = (id) => dispatch => {
    postsAPI.fetchPost(id)
        .then(post => dispatch(fetchPostAction(post)))
}

const createPostAction = (post) => ({
    type: CREATE_POST,
    post
})

export const createPost = (post) => dispatch => {
    const postData = {
        ...post,
        id: Math.random().toString(),
        timestamp: Date.now()
    }
    postsAPI.createPost(post, postData)
        .then(post => dispatch(createPostAction(post)))
}

const deletePostAction = (id) => ({
    type: DELETE_POST,
    id
})

export const deletePost = (id) => dispatch => {
    postsAPI.deletePost(id)
        .then(deletePostAction(id))
}

const updatePostAction = (post) => ({
    type: UPDATE_POST,
    post
})

export const updatePost = (id, post) => dispatch => {
    postsAPI.updatePost(id, post)
        .then(post => dispatch(updatePostAction(post)))
}

const votePostAction = ({ id, score }) => {
    type: VOTE_POST,
    id,
    score
}

export const votePost = (id, vote) => dispatch => {
    postsAPI.votePost(id, vote)
        .then(post => dispatch(votePostAction(post)))
}
