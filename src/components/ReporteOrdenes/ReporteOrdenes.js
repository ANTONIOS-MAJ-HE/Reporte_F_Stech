import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filtros from '../Filtros';
import VentasTable from '../VentasTable';

function ReporteOrdenes() {
  const [ventas, setVentas] = useState([]);
  const [filtroCanal, setFiltroCanal] = useState('');
  const [filtroNumeroOrden, setFiltroNumeroOrden] = useState('');
  const [filtroNombreCliente, setFiltroNombreCliente] = useState('');
  const [filtroFechaDesde, setFiltroFechaDesde] = useState('');
  const [filtroFechaHasta, setFiltroFechaHasta] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:8000/consulta/';
        let parametros = [];

        // Construir la URL con los filtros seleccionados
        // ...

        // Realizar la solicitud a la API
        // ...

        // Establecer los datos de ventas en el estado
        // ...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamada inicial

    const intervalId = setInterval(fetchData, 5000); // Establecer intervalo de actualización

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [filtroCanal, filtroNumeroOrden, filtroNombreCliente, filtroFechaDesde, filtroFechaHasta]);

  return (
    <div>
      <h2>Reporte de Órdenes</h2>
      <Filtros 
        setFiltroCanal={setFiltroCanal}
        setFiltroNumeroOrden={setFiltroNumeroOrden}
        setFiltroNombreCliente={setFiltroNombreCliente}
        setFiltroFechaDesde={setFiltroFechaDesde}
        setFiltroFechaHasta={setFiltroFechaHasta}
      />
      <VentasTable ventas={ventas} />
    </div>
  );
}

export default ReporteOrdenes;