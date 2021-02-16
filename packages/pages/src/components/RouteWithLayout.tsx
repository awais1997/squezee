import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  layout: any;
  component: any;
  protect?: boolean;
  [key: string]: any;
}

export const RouteWithLayout = (props: Props) => {
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
        return renderRoute(matchProps)
      }
      }
    />
  );
};
