import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import CustomTabBar from '../../components/CustomTabBar'
import './index.scss'

export default class Message extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='message'>
        <Text>message</Text>
        <CustomTabBar current={3} />
      
      </View>
    )
  }
}
