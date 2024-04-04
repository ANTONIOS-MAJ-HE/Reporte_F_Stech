import React from 'react';

function Filtros({ 
  setFiltroCanal, 
  setFiltroNumeroOrden, 
  setFiltroNombreCliente, 
  setFiltroFechaDesde, 
  setFiltroFechaHasta 
}) {
  return (
    <div className="filtros">
      <input type="text" placeholder="Canal" onChange={(e) => setFiltroCanal(e.target.value)} />
      <input type="text" placeholder="Número de Orden" onChange={(e) => setFiltroNumeroOrden(e.target.value)} />
      <input type="text" placeholder="Nombre del Cliente" onChange={(e) => setFiltroNombreCliente(e.target.value)} />
      <input type="date" placeholder="Fecha Desde" onChange={(e) => setFiltroFechaDesde(e.target.value)} />
      <input type="date" placeholder="Fecha Hasta" onChange={(e) => setFiltroFechaHasta(e.target.value)} />
    </div>
  );
}

export default Filtros;
