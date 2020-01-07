import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
const OtherComponet = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));

/**
 * suspense + lazy
 * 浏览器设置网络为低速，更直观
 */
const LazyLoadPage: React.FC = () => {
  return (
    <Suspense fallback={<Spin />}>
      <section>
        <OtherComponet />
        <AnotherComponent />
      </section>
    </Suspense>
  );
};

export default LazyLoadPage;
