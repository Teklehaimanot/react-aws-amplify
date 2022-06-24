import React, { useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import Header from '../../components/header/Header';
import './Welcome.scss';

import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

const Welcome = () => {
  const [weather, setWeatheData] = useState([
    {
      name: 'Perciptitation Intensity',
      value: 81,
    },
    {
      name: 'Perciptitation Probablity',
      value: 90,
    },
    {
      name: 'Pressure',
      value: 81,
    },
    {
      name: 'Wind Speed',
      value: 81,
    },
    {
      name: 'Wind Direction',
      value: 81,
    },
  ]);
  const [sensorData, setSensorData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Value',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="container-left">
          <h2>Sensor</h2>
          <Bar
            data={sensorData}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </div>
        <div className="container-right">
          <h2>Weather</h2>
          <ul>
            {weather.map((item) => (
              <li>
                <span>{item.name} : </span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Welcome;
