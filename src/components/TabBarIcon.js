import React from 'react';
import { Feather } from '@expo/vector-icons';

const tabBarIcon = name => ({ tintColor }) => (
  <Feather
    name={ name } 
    size={ 35 } 
    color={ tintColor } 
  />
);

export default tabBarIcon;
