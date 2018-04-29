import * as ReadableAPI from '../utils/postApi'

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
    return postsAPI.fetchPosts()
        .then(posts => dispatch(fetchPostsAction(posts)))
}