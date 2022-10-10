import React from 'react';
import { View } from '@tarojs/components'

import './index.scss'

import CustomTabBar from '../../components/CustomTabBar';


export default function Index() {
  return (
    <View className='index'>
      index
      <CustomTabBar current={0} />
    </View>
  )
}

