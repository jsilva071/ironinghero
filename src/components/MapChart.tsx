import React, { useState, useEffect } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Point
} from "react-simple-maps";

import { api } from "../services/api";


interface MapProps {
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    }
  };
}

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function MapChart() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/api/?results=20').then((res: any) => {
      let randomUsers = res.data.results;
      setUsers(randomUsers);
    });
  }, []);

  const markers = users.map((user: MapProps) => {
    const userData = {
      markerOffset: -15,
      name: user.location.city,
      coordinates: [Number(user.location.coordinates.latitude), Number(user.location.coordinates.longitude)] as Point
    }

    return userData;
  });

  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#368bff" stroke="#55c7ff" strokeWidth={1} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "red", fontSize: '10px' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
