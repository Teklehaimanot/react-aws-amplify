import React, { useEffect } from 'react';
import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
const Welcome = () => {
  //   useEffect(() => {
  //     async function initializeMap() {
  //       const map = await createMap({
  //         container: 'map', // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
  //         center: [-123.1187, 49.2819], // [Longitude, Latitude]
  //         zoom: 11,
  //       });
  //     }

  //     initializeMap();
  //   }, []);
  return (
    <div className="container">
      <div id="map">welcome</div>
    </div>
  );
};

export default Welcome;
