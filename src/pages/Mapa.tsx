import React, { useEffect } from 'react';
import MapChart from "../components/MapChart";

import PageMenu from '../components/PageMenu';

function Mapa() {
  useEffect(() => {
    let storageMapaViews = localStorage.getItem('mapa-views');
    localStorage.setItem('mapa-views', String(Number(storageMapaViews) + 1));
  }, []);

  return (
    <div>
      <PageMenu />
      <MapChart />
    </div>
  );
}

export default Mapa;