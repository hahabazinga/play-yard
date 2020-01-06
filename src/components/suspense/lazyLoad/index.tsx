import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
const OtherComponet = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));

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
