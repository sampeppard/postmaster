import { FETCH_CATEGORIES } from '../actions/constants'

const categories = (state = {}, action) => {
    const { categories } = action;
    switch (action.type) {
        case FETCH_CATEGORIES:
            return categories
        default:
            return state
    }
}

export default categories