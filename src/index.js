import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Header from './Layout/Header';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Routes />
    </NavigationContainer>
  );
}
