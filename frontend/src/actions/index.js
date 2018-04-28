import * as PostAPIUtil from '../utils/postApi'
import * as CategoryAPIUtil from '../utils/categoryApi'
import * as CommentAPIUtil from '../utils/commentApi'

export const ADD_POST = 'ADD_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POST = 'FETCH_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY'
export const VOTE_UP_POST = 'VOTE_UP_POST'
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const VOTE_UP_COMMENT = 'VOTE_UP_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_DOWN_COMMENT = 'VOTE_DOWN_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const SORT_COMMENTS = 'SORT_COMMENTS'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

// CATEGORY ACTIONS

export const fetchCategories = (category) => dispatch (
    CategoryAPIUtil.getPostsByCategory(category)
        .then(posts => dispatch({
            type: FETCH_CATEGORIES,
            categories,
    }))
);

export const fetchCategoriesPosts = (category) => dispatch(
    CategoryAPIUtil.getPostsByCategory(category)
        .then(posts => dispatch({
            type: FETCH_CATEGORIES,
            categories,
        }))
);

// POST ACTIONS

export const fetchPosts = () => dispatch (
    PostAPIUtil.fetchPosts.then(posts => dispatch({
        type: FETCH_POSTS,
        posts
    }))
);

export const fetchPost = (postId, category) => dispatch => (
    PostAPIUtil.fetchPost(postId).then(post => dispatch({
        type: FETCH_POST,
        post,
        category
    }))
);

export const fetchPostByCategory = (category) => dispatch => (
    PostAPIUtil.fetchCategorizedPost(category).then(posts => dispatch({
        type: FETCH_POSTS_BY_CATEGORY,
        category,
        posts
    }))
);

export const createNewPost = (post) => dispatch => (
    PostAPIUtil.createPost(post).then(newPost => dispatch({
        type: ADD_POST,
        newPost
    }))
);

export const updatePost = ({ id, title, body }) => dispatch => (
    PostAPIUtil.updatePost({ id, title, body })
        .then(post => dispatch({
            type: UPDATE_POST,
            post
    }))
);

export const voteUpPost = (id) => dispatch => (
    PostAPIUtil.updatePostVote(id, "voteup").then(comment => dispatch({
        type: VOTE_UP,
        post
    }))
);

export const downUpPost = (id) => dispatch => (
    PostAPIUtil.updatePostVote(id, "votedown").then(comment => dispatch({
        type: VOTE_DOWN,
        post
    }))
);

// COMMENT ACTIONS

export const fetchComments = (id) => dispatch => (
    CommentAPIUtil.fetchComments(id).then(comments =>
        dispatch({
            type: FETCH_COMMENTS,
            id,
            comments
        })
    )
);

export const addComment = (comment) => dispatch => (
    CommentAPIUtil.addComment(comment).then(addedComment => dispatch({
        type: ADD_COMMENT,
        comment: addedComment
    }))
);

export const updateComment = (id, comment) => dispatch (
    CommentAPIUtil.updateComment(id, comment).then(updatedComment => dispatch({
        type: UPDATE_COMMENT,
        updatedComment
    }))
);

export const deleteComment = (id, postId) => dispatch => (
    CommentAPIUtil.deleteComment().then(() => dispatch({
        type: DELETE_COMMENT,
        id,
        postId
    }))
);

export const voteUpComment = (id) => dispatch (
    CommentAPIUtil.updateCommentVote(id, "voteup").then(comment => dispatch({
        type: VOTE_UP_COMMENT,
        comment
    }))
);

export const voteDownComment = (id) => dispatch(
    CommentAPIUtil.updateCommentVote(id, "votedown").then(comment => dispatch({
        type: VOTE_DOWN_COMMENT,
        comment
    }))
);
