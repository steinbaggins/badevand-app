import React, { useState, useEffect } from 'react';
// import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

const flagColor = number => {
  const colors = ['#e66767', '#3dc1d3', '#f5cd79', '#303952'];
  return colors[number - 1];
}

export default function Map() {
  const [beaches, setBeaches] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://api.vandudsigten.dk/beaches');
      const data = await res.json();
      setBeaches(data)
    }
    fetchData();
  },[]);
  return (
    <MapView
      style={ { flex: 1 } }
    >
      {beaches.map(beach => (
        <Marker key={ beach.id } coordinate={ { latitude: beach.latitude, longitude: beach.longitude } }>
          <MaterialIcons name="flag" size={ 30 } color={ flagColor(beach.data[0].water_quality) } />
        </Marker>
      ))}
    </MapView>
  );
}
