/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import { Auth } from './src/global';

const store = createStore(rootReducer);

import AuthNavigator from './src/navigators/AuthNavigator';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      status: 0
    }
  }
  
  componentDidMount() {
    this.checkAuth();
    this.checkReduxAuth();
  }

  async checkAuth() {
      const authenticated = await Auth.checkAuth();

      if (authenticated)
        this.setState({status: 2});
      else
        this.setState({status: 1});
  }

  checkReduxAuth() {
    store.subscribe(() => {
      let authentication = store.getState().authentication;

      if (authentication.authenticated)
        this.setState({ status: 2 });
      else
        this.setState({ status: 1 });
    });
  }

  renderApp() {
    switch (this.state.status) {
      case 1:
        return <AuthNavigator/>
        break;
      case 2:
        return null;
        break;
      default:
        return null;
        
    }
  }

  render() {
    return (
      <Provider store={store}>
          {this.renderApp()}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
