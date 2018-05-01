import { FETCH_CATEGORIES } from '../actions/constants'

export function categoriesReducer(state = {}, action) {
    const { categories } = action;

    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                "categories": categories
            }
        default:
            return state
    }
}
