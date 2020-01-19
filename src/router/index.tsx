import * as React from 'react';
import EffectAsyncPage from '../components/hooks/useEffectAsync';
import RefPage from '../components/hooks/useRef';
import LazyLoadPage from '../components/suspense/lazyLoad';
import WebComponentsSquare from '../components/webComponents';
import RouterPage from '../components/router';
import FontArea from '../components/hooks/useReducer'

type RouterConfigType =
  | {
      hasSubMenu: true;
      name: string;
      children: Array<{
        hasSubMenu: false;
        path: string;
        name: string;
        component: JSX.Element;
      }>;
    }
  | {
      hasSubMenu: false;
      path: string;
      name: string;
      component: React.FC | React.Component | JSX.Element;
    };
export const routerConfig: RouterConfigType[] = [
  {
    hasSubMenu: true,
    name: 'hooks',
    children: [
      {
        hasSubMenu: false,
        name: '异步请求',
        path: '/hooks/useEffectAsync',
        component: <EffectAsyncPage />,
      },
      {
        hasSubMenu: false,
        name: 'ref',
        path: '/hooks/useRef',
        component: <RefPage />,
      },
      {
        hasSubMenu: false,
        name: 'useReducer',
        path: '/hooks/useReducer',
        component: <FontArea />,
      },
    ],
  },
  {
    hasSubMenu: true,
    name: 'suspense',
    children: [
      {
        hasSubMenu: false,
        name: 'lazyload',
        path: '/suspense/lazyload',
        component: <LazyLoadPage />,
      },
    ],
  },
  {
    hasSubMenu: true,
    name: 'web components',
    children: [
      {
        hasSubMenu: false,
        name: 'square',
        path: '/webComponents/square',
        component: <WebComponentsSquare />,
      },
    ],
  },
  {
    hasSubMenu: true,
    name: 'react-router',
    children: [
      {
        hasSubMenu: false,
        name: 'router',
        path: '/router/index',
        component: <RouterPage />,
      },
    ],
  },
];
