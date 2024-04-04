import React from 'react';

function VentasTable({ ventas }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Canal</th>
          <th>Número de Orden</th>
          <th>Nombre del Cliente</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio (S/IGV)</th>
          <th>Total (S/IGV)</th>
          <th>Fecha de Orden</th>
          <th>Fecha de Proceso</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map((venta, index) => (
          <tr key={index}>
            <td>{venta.canal}</td>
            <td>{venta.numero_orden}</td>
            <td>{venta.nombre_cliente}</td>
            <td>{venta.nombre_producto}</td>
            <td>{venta.cantidad}</td>
            <td>{venta.precio_s_igv}</td>
            <td>{venta.total_s_igv}</td>
            <td>{venta.fecha_orden}</td>
            <td>{venta.fecha_proceso}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VentasTable;
