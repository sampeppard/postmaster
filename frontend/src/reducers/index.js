import { combineReducers } from 'redux'
import { categoriesReducer } from './categories'
import { postsReducer } from './posts'
import { commentReducer } from './comments'

export default combineReducers({
    category: categoriesReducer,
    post: postsReducer,
    comment: commentReducer
})