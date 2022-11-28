import {lazy, ElementType, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import Layout from "../layout";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {index: true, element: <HomePage/>},
      ]
    },
  ]);
}

const HomePage = Loadable(lazy(() => import('../pages/Home')));