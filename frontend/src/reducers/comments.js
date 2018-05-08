import {
    FETCH_COMMENTS,
    CREATE_COMMENT,
    VOTE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from '../actions/constants'

export function commentReducer(state = {}, action) {
    const { comment, comments } = action
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: comments.reduce((a, c) => {
                    a[c.id] = c
                    return a;
                }, {})
            }
        case CREATE_COMMENT:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [comment.id]: comment
                }
            }
        case VOTE_COMMENT:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.id]: {
                        ...state.comments[action.id],
                        voteScore: action.voteScore
                    }
                }
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [comment.id]: comment
                }
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [comment.id]: null
                }
            }

        default:
            return state;
    }
}