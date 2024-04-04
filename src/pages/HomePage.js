import React from 'react';
import Menu from '../components/Menu/Menu';
import ReporteOrdenes from '../components/ReporteOrdenes/ReporteOrdenes';
import ReporteVentasDiarias from '../components/ReporteVentasDiarias/ReporteVentasDiarias';
import ReporteVentasProductos from '../components/ReporteVentasProductos/ReporteVentasProductos';
import ReporteVentasCanales from '../components/ReporteVentasCanales/ReporteVentasCanales';

function HomePage() {
  return (
    <div>
      <h1>Reporte de Ventas</h1>
      <Menu />
      <ReporteOrdenes />
      <ReporteVentasDiarias />
      <ReporteVentasProductos />
      <ReporteVentasCanales />
    </div>
  );
}

export default HomePage;