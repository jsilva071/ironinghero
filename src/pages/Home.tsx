import React, { useEffect } from 'react';

import PageMenu from '../components/PageMenu';
import CounterTable from '../components/CounterTable';

function Home() {

  useEffect(() => {
    let storageHomeViews = localStorage.getItem('home-views');
    localStorage.setItem('home-views', String(Number(storageHomeViews) + 1));
  }, []);

  return (
    <div>
      <PageMenu />
      <CounterTable />
    </div>
  );
}

export default Home;