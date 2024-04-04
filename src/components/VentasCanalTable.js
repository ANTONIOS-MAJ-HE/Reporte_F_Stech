import React from 'react';

function VentasCanalTable({ ventasCanal }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Canal</th>
          <th>Cantidad de Ordenes</th>
          <th>Cantidad de Productos</th>
          <th>Precio Sin IGV</th>
          <th>Precio Con IGV</th>
          <th>Porcentaje</th>
        </tr>
      </thead>
      <tbody>
        {ventasCanal.map((ventaCanal, index) => (
          <tr key={index}>
            <td>{ventaCanal.canal}</td>
            <td>{ventaCanal.cantidad_ordenes}</td>
            <td>{ventaCanal.cantidad_productos}</td>
            <td>{ventaCanal.precio_s_igv}</td>
            <td>{ventaCanal.precio_c_igv}</td>
            <td>{ventaCanal.porcentaje}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VentasCanalTable;
