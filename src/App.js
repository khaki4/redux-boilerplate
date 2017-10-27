import React from 'react';
import { connect } from 'react-redux'
import * as fromCounter from './reducers/rootReducer'

const App = (props) => {
  const increaseCnt = () => props.increaseCount(1)
  return (
    <div className="App">
      <button onClick={increaseCnt}>{props.count}</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: (value) => dispatch(fromCounter.increaseCount(value))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)