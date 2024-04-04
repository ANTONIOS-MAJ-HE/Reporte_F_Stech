import React from 'react';
import Menu from '../components/Menu/Menu';
import ReporteOrdenes from '../components/ReporteOrdenes/ReporteOrdenes';
import ReporteVentasDiarias from '../components/ReporteVentasDiarias/ReporteVentasDiarias';

function HomePage() {
  return (
    <div>
      <h1>Reporte de Ventas</h1>
      <Menu />
      <ReporteOrdenes />
      <ReporteVentasDiarias />
    </div>
  );
}

export default HomePage;