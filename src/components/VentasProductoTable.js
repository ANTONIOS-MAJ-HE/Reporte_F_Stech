import React from 'react';

function VentasProductoTable({ ventasProducto }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Codigo</th>
          <th>PartNumber</th>
          <th>Stock</th>
          <th>Unidades</th>
          <th>Total Sin IGV</th>
          <th>Total Con IGV</th>
          <th>Porcentaje</th>
        </tr>
      </thead>
      <tbody>
        {ventasProducto.map((ventaProducto, index) => (
          <tr key={index}>
            <td>{ventaProducto.marca_producto}</td>
            <td>{ventaProducto.mini_codigo}</td>
            <td>{ventaProducto.part_number}</td>
            <td>{ventaProducto.stock_restante}</td>
            <td>{ventaProducto.cantidad_productos_vendidos}</td>
            <td>{ventaProducto.subtotal_s_igv}</td>
            <td>{ventaProducto.total_c_igv}</td>
            <td>{ventaProducto.porcentaje}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VentasProductoTable;
