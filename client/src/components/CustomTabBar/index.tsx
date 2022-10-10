import { useMemo } from 'react';
import { AtTabBar }  from 'taro-ui';
import Taro from '@tarojs/taro';

import "taro-ui/dist/style/components/badge.scss" // 按需引入\
import "taro-ui/dist/style/components/tab-bar.scss" // 按需引入
import "taro-ui/dist/style/components/icon.scss" // 按需引入



import './index.scss';

export default function CustomTabBar(props) {

  const path:Array<string> = [
    '/pages/index/index',
    '/pages/discovery/index',
    '/pages/publish/index',
    '/pages/message/index',
    '/pages/my/index',
  ]

  function handleClick(value:number) {
    if (value !== props.current) {
      Taro.switchTab({
        url: path[value]
      });
    }
    
  }

  const tabList = useMemo(() => [
    { title: '首页', iconType:'home' },
    { title: '发现', iconType:'eye' },
    { title: '发布', iconType:'add-circle' },
    { title: '消息', iconType:'bell' },
    { title: '我的', iconType:'user' },
  ], []);

  return (
    <AtTabBar
      fixed
      tabList={tabList}
      onClick={handleClick}
      current={props.current}
    />
  )
}