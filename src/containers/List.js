import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const flagColor = number => {
  const colors = ['#e66767', '#3dc1d3', '#f5cd79', '#303952'];
  return colors[number - 1];
}

export default function List() {
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
    <ScrollView>
      <SafeAreaView>
      {beaches.map(beach => (
        <View key={ beach.id } style={ { flexDirection: 'row', alignItems: 'center' } }>
          <MaterialIcons name="flag" size={ 50 } color={ flagColor(beach.data[0].water_quality) } />
          <View>
            <Text size={ 30 }>{ beach.name }</Text>
            <View style={ { flexDirection: 'row', alignItems: 'center' } }>
              <Feather name="droplet" size={ 25 } />
              <Text size={ 30 }>{ beach.data[0].water_temperature }</Text>
            </View>
            <View style={ { flexDirection: 'row', alignItems: 'center' } }>
              <Feather name="cloud-rain" size={ 25 } />
              <Text size={ 30 }>{ beach.data[0].air_temperature }</Text>
            </View>
          </View>
        </View>
      ))}
      </SafeAreaView>
    </ScrollView>
  );
}
