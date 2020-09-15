import React from 'react';
import {Image} from 'react-native';

import images from '@constants/images';

function LogoTitle() {
  return <Image style={{width: 50, height: 50}} source={images.logo} />;
}

export default LogoTitle;
