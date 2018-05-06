import {
    FETCH_POSTS,
    FETCH_POST,
    CREATE_POST,
    DELETE_POST,
    UPDATE_POST,
    VOTE_POST
} from '../actions/constants'

export function postsReducer(state = {}, action) {
    const { posts, post } = action
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: posts.reduce((a, c) => {
                    a[c.id] = c
                    return a
                }, {})
            }
            break;
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
                    [action.id]: {

                    }
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
        default:
            return state
    }
}