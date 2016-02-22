import React from 'react'
import Home from './home'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Home />
      </Provider>
    )
  }
}
