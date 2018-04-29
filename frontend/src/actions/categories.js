import * as ReadableAPI from '../utils/categoriesApi'
import { FETCH_CATEGORIES } from './constants'

export const fetchCategoriesAction = (categories) => {
    return {
        type: FETCH_CATEGORIES,
        categories
    }
}

export const fetchCategories = () => {
    return dispatch => {
        return categoriesAPI.fetchCategories()
            .then(categories => dispatch(fetchCategoriesAction(categories)))
    }
}