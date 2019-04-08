import React from 'react';
import './Tablero.css';
import { Pieza } from './Pieza';
import R from 'ramda';
import { contenidos } from '../constants/contenidos';
import _ from 'lodash';


export function Tablero(props) {
  const totalPiezas = props.columns * props.rows;
  if(totalPiezas % 2 !== 0) throw new Error("No se puede crear tablero con cantidad impar de fichas");

  const piezasMezcladas = _.shuffle(_.flatMap(_.sampleSize(contenidos, totalPiezas / 2), R.flip(R.repeat)(2)));

  const tableroStyle = {
    gridTemplateColumns: `repeat(${props.columns}, fit-content(120px))`
  }

  function contenidoPara(fila, columna) {
    return piezasMezcladas[fila * props.columns + columna];
  }

  const piezas = R.chain(
    (rowNumber) => R.map((columnNumber) => <Pieza key={`${rowNumber}-${columnNumber}`} contenido={contenidoPara(rowNumber, columnNumber)} />,
      R.range(0, props.columns)),
    R.range(0, props.rows)
  )

  return <div style={tableroStyle} className='tablero'>
    {piezas}
  </div>
}