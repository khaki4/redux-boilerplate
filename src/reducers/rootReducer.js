// Ducks: https://github.com/erikras/ducks-modular-redux
// https://deminoth.github.io/redux/recipes/reducers/BasicReducerStructure.html



import { createSelector } from 'reselect'

// Actions
const BASE_PREFIX = 'blog_heroku_api/domain_posts/'
export const INCREASE_COUNT = `${BASE_PREFIX}INCREASE_COUNT`

// Action Creators
export const increaseCount = (num) => ({ type: INCREASE_COUNT, payload: num })

export const increaseAsync = (value) => (dispatch) => {
  setTimeout(() => {
    dispatch(increaseCount(value))
  }, 1000);
}

// Reducers
export const initState = {
  count: 0,
}
export default (state = initState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state
  }
}