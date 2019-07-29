import React from 'react';
import ColumnResizer from 'react-column-resizer';

const DataRow = ({rank, name, annuelMoyen, threeYears, commune, description}) => (
  <tr>
    <td>{rank}</td>
    <ColumnResizer className="columnResizer" minWidth={0} />
    <td>{name}</td>
    <ColumnResizer className="columnResizer" minWidth={0} />
    <td>{annuelMoyen}</td>
    <ColumnResizer className="columnResizer" minWidth={0} />
    <td>{threeYears}</td>
    <ColumnResizer className="columnResizer" minWidth={0} />
    <td>{commune}</td>
    <ColumnResizer className="columnResizer" minWidth={0} />
    <td>{description}</td>
  </tr>
);
export default DataRow;
