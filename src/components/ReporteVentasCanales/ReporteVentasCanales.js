import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filtros from '../Filtros';
import VentasCanalTable from '../VentasCanalTable';

function ReporteVentasCanales() {
  const [ventasCanales, setVentas] = useState([]);
//   const [filtroCanal, setFiltroCanal] = useState('');
//   const [filtroNumeroOrden, setFiltroNumeroOrden] = useState('');
//   const [filtroNombreCliente, setFiltroNombreCliente] = useState('');
//   const [filtroFechaDesde, setFiltroFechaDesde] = useState('');
//   const [filtroFechaHasta, setFiltroFechaHasta] = useState('');

  useEffect(() => {
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQyOTE0MTg2LCJpYXQiOjE3MTEzNzgxODYsImp0aSI6IjNjODMxMDM1MWFiZTRiZDA5OTIzODE4ODg4NzFjMWNjIiwidXNlcl9pZCI6MX0.3c7Hn9YZvW7GXy0CmgZyMKZWwpyypuZs773cKoLFg8s";

    const fetchData = async () => {
      try {
        let url = 'https://reporte-b-stech.onrender.com/ventas-canales/';
        let parametros = [];

        // if (filtroCanal) {
        //     parametros.push(`canal/${filtroCanal}/`);
        //   }
        //   if (filtroNumeroOrden) {
        //     parametros.push(`numero-orden/${filtroNumeroOrden}/`);
        //   }
        //   if (filtroNombreCliente) {
        //     parametros.push(`nombre-cliente/${filtroNombreCliente}/`);
        //   }
        //   if (filtroFechaDesde) {
        //     // Convertir la fecha desde el formato de entrada al formato de fecha ISO
        //     const fechaDesdeISO = new Date(filtroFechaDesde).toISOString().split('T')[0];
        //     parametros.push(`fecha_desde/${fechaDesdeISO}/`);
        //   }
        //   if (filtroFechaHasta) {
        //     // Convertir la fecha desde el formato de entrada al formato de fecha ISO
        //     const fechaHastaISO = new Date(filtroFechaHasta).toISOString().split('T')[0];
        //     parametros.push(`fecha_hasta/${fechaHastaISO}/`);
        //   }

        if (parametros.length > 0) {
            url += parametros.join('');
          }

        const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            }
          });
          setVentas(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamada inicial

    const intervalId = setInterval(fetchData, 5000); // Establecer intervalo de actualización

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, []);

  return (
    <div>
      <h2>Reporte de Ventas Por Canal</h2>
      <Filtros 
        // setFiltroCanal={setFiltroCanal}
        // setFiltroNumeroOrden={setFiltroNumeroOrden}
        // setFiltroNombreCliente={setFiltroNombreCliente}
        // setFiltroFechaDesde={setFiltroFechaDesde}
        // setFiltroFechaHasta={setFiltroFechaHasta}
      />
      <VentasCanalTable ventasCanal={ventasCanales} />
    </div>
  );
}

export default ReporteVentasCanales;
