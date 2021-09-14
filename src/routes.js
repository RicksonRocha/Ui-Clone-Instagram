import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Feed from './Pages/Feed';
import Logo from './Layout/Header';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: props => <Logo {...props} />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
        }}
      />
    </Stack.Navigator>
  );
}
