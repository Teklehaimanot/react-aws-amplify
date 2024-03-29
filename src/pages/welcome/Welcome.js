import React, { useEffect, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import Header from '../../components/header/Header';
import axios from 'axios';
import './Welcome.scss';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Map from '../../components/map/Map';

ChartJS.register(...registerables);
const Welcome = () => {
  const [weather, setWeatheData] = useState([]);
  const [sensorData, setSensorData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Value',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [],
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setSensorData(res.sensor);
      setWeatheData(res.weather);
    };

    getData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:5000/api/sensor');
    return result.data;
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-left">
          <h2>Sensor</h2>
          <div className="chart-map">
            <div className="chart-view">
              <Bar
                className="bar"
                data={sensorData}
                options={{
                  title: {
                    display: true,
                    text: 'Sensor Result',
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: 'right',
                  },
                }}
              />
            </div>

            <div className="map-view">
              <Map />
            </div>
          </div>
        </div>
        <div className="container-right">
          <h2>Weather</h2>
          <ul>
            {weather.map((item) => (
              <li key={item.name}>
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
