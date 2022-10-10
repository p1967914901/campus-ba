import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'
import CustomTabBar from '../../components/CustomTabBar'

export default class Discovery extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='discovery'>
        <Text>discovery</Text>
        <CustomTabBar current={1} />
      </View>
    )
  }
}
