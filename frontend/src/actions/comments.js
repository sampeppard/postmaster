import * as commentsApi from '../utils/commentsApi'

import { 
    FETCH_COMMENTS,
    CREATE_COMMENT,
    DELETE_COMMENT, 
    EDIT_COMMENT,
    VOTE_COMMENT
} from './constants'

const fetchCommentsAction = (comments) => (
    {
        type: FETCH_COMMENTS,
        comments
    }
)

export const fetchComments = (id) => dispatch => {
    commentsApi.fetchComments(id)
        .then(comments => dispatch(fetchCommentsAction(comments)))
}

const createCommentAction = (comment, postId) => ({
    type: CREATE_COMMENT,
    comment,
    postId
});

export const createComment = (comment) => dispatch => {
    const commentData = {
        ...comment,
        id: Math.random().toString(),
        timestamp: Date.now()
    }
    commentsApi.createComment(comment, commentData)
        .then(comment => dispatch(createCommentAction(comment, postId)));
};