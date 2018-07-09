import React from 'react';
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import client from './lib/GraphQLClient';
import Navigation from './navigation/Navigation';
import BottomNavigation from './navigation/BottomNavigation';
import store from "./lib/Store";

//
// const randomNumber = Math.random();
// debugger;

class App extends React.Component {
  render() {
    console.log(process.env.NODE_ENV);
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BottomNavigation/>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;

