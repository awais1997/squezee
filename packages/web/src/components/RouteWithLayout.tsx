import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAccessToken } from '../helpers/accessToken'
interface Props {
  layout: any;
  component: any;
  protect?: boolean;
  [key: string]: any;
}

const RouteWithLayout = (props: Props) => {
  const { protect, layout: Layout, component: Component, ...rest } = props;
  const renderRoute = (matchProps: any) => (
    <Layout>
      <Component {...matchProps} />
    </Layout>
  )

  return (
    <Route
      {...rest}
      render={(matchProps: any) => {
        if (!protect) {
          return renderRoute(matchProps);
        }

        if (!getAccessToken()) {
          return (<Redirect
            to={{
              pathname: '/sign-in'
            }}
          />)
        }

        return renderRoute(matchProps)
      }
      }
    />
  );
};

export default RouteWithLayout;
