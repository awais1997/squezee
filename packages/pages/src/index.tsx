import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import App from './App';
import ApolloClient from './helpers/ApolloClient'

ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);