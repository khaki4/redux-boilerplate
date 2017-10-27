import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import reducers from './reducers/rootReducer'

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
      getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

const thunk = createThunkMiddleware()
thunk.withExtraArgument = createThunkMiddleware;

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
