import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Routes as AppRouter } from './Routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import validate from 'validate.js';
import CommonValidators from './helpers/common-validator'
import { setAccessToken } from './helpers/accessToken'
import { refreshToken } from './helpers/ApiClient'

validate.validators = {
  ...validate.validators,
  ...CommonValidators
};

// prepare navigation
export const history = createBrowserHistory();

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    refreshToken()
      .then(({ accessToken }) => {
        setAccessToken(accessToken);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
