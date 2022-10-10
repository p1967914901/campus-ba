export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discovery/index',
    'pages/publish/index',
    'pages/message/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [{
      text: '首页',
      pagePath: 'pages/index/index'
    }, {
      text: '发现',
      pagePath: 'pages/discovery/index'
    }, {
      text: '发布',
      pagePath: 'pages/publish/index'
    }, {
      text: '消息',
      pagePath: 'pages/message/index'
    }, {
      text: '我的',
      pagePath: 'pages/my/index'
    }]
  }
})
