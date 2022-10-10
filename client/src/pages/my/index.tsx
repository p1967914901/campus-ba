import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import CustomTabBar from '../../components/CustomTabBar'

import './index.scss'

export default class My extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='my'>
        <Text>my</Text>
        <CustomTabBar current={4} />
      
      </View>
    )
  }
}
