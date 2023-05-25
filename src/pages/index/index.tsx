import { View, Text, WebView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <WebView src="http://127.0.0.1:5500/1.html" onMessage={(e) => {
        console.log(11111, e)
      }}></WebView>
    </View>
  )
}
