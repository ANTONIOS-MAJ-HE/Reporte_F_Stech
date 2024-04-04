import React from 'react';

function VentasDiaTable({ ventasDia }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Dia</th>
          <th>total soles dia</th>
          <th>total unidades dia</th>
          <th>total soles mes</th>
          <th>total unidades mes</th>
        </tr>
      </thead>
      <tbody>
        {ventasDia.map((ventaDia, index) => (
          <tr key={index}>
            <td>{ventaDia.dia}</td>
            <td>{ventaDia.total_soles_dia}</td>
            <td>{ventaDia.total_unidades_dia}</td>
            <td>{ventaDia.total_soles_mes}</td>
            <td>{ventaDia.total_unidades_mes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VentasDiaTable;
