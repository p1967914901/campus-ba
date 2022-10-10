import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './publish.scss'
import CustomTabBar from '../../components/CustomTabBar'

export default class Publish extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='publish'>
        <Text>Hello world!</Text>
        <CustomTabBar current={2} />
      </View>
    )
  }
}
