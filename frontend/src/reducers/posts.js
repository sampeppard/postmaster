import {
    FETCH_POSTS,
    FETCH_POST,
    CREATE_POST,
    DELETE_POST,
    UPDATE_POST,
    VOTE_POST,
    SORT_POST
} from '../actions/constants'

export function postsReducer(state = {}, action) {
    const { posts, post } = action
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: {
                    ...posts
                }
            }
        case FETCH_POST:
            return {
                ...state,
                posts: {
                    [post.id]: post
                }
            }
        case CREATE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [post.id]: post
                }
            }
        case DELETE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]: null
                }
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [post.id]: post
                }
            }
        case VOTE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]: {
                        ...state.posts[action.id],
                        voteScore: action.voteScore
                    }
                }

            }
        case SORT_POST:
            return {
                ...state,
                sortBy: action.sort
            }
        default:
            return state
    }
}