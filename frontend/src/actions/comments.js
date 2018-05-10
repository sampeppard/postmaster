import * as commentsApi from '../utils/commentsApi'

import { 
    FETCH_COMMENTS,
    CREATE_COMMENT,
    DELETE_COMMENT, 
    UPDATE_COMMENT,
    VOTE_COMMENT
} from './constants'

const fetchCommentsAction = (comments) => ({
    type: FETCH_COMMENTS,
    comments
})

export const fetchComments = (id) => dispatch => {
    commentsApi.fetchComments(id)
        .then(comments => dispatch(fetchCommentsAction(comments)))
}

const createCommentAction = (comment, postId) => ({
    type: CREATE_COMMENT,
    comment,
    postId
})

export const createComment = (comment) => dispatch => {
    const postId = comment.parentId
    const commentData = {
        ...comment,
        id: Math.random().toString(),
        timestamp: Date.now()
    }
    commentsApi.createComment(comment, commentData)
        .then(comment => dispatch(createCommentAction(comment, postId)));
}

const updateCommentAction = (comment) => ({
    type: UPDATE_COMMENT,
    comment
})

export const updateComment = (id, comment) => dispatch => {
    commentsApi.updateComment(id, comment)
        .then((comment) => dispatch(updateCommentAction(comment)));
}

const deleteCommentAction = (comment, parentId) => ({
    type: DELETE_COMMENT,
    comment,
    parentId
})

export const deleteComment = (id, parentId) => dispatch => {
    commentsApi.deleteComment(id)
        .then((comment) => dispatch(deleteCommentAction(comment, parentId)))
}

const voteCommentAction = ({ id, voteScore }) => ({
    type: VOTE_COMMENT,
    id,
    voteScore
})

export const voteComment = (id, vote) => dispatch => {
    commentsApi.voteComment(id, vote)
        .then((comment) => dispatch(voteCommentAction(comment)))
}
