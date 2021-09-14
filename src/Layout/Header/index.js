import React from 'react';
import {Image, View} from 'react-native';

import Logo from '../../assets/instagram.png';

export default function Header() {
  return (
    <View>
      <Image
        source={Logo}
        style={{
          width: '70%',
          height: 60,
          marginTop: 40,
        }}
      />
    </View>
  );
}
