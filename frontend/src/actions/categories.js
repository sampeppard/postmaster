import { FETCH_CATEGORIES } from './constants'
import * as categoriesApi from '../utils/categoriesApi'

const fetchCategoriesAction = (categories) => (
    {
        type: FETCH_CATEGORIES,
        categories
    }
)

export const fetchCategories = () => dispatch => {
    categoriesApi.fetchCategories()
        .then(data => dispatch(fetchCategoriesAction(data)));
}

export const fetchPostsByCategory = (category) => dispatch => {
    categoriesApi.fetchPostsByCategory(category)
        .then(data => dispatch(fetchCategoriesAction(data)))
}