import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((el) => el.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map((el, i) => (
        <ChartBar key={el.label} value={el.value} maxValue={totalMaximum} label={el.label} />
      ))}
    </div>
  );
};

export default Chart;
