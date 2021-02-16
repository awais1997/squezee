import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Routes as AppRouter } from './Routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

// prepare navigation
export const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
