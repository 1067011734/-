import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import XButton from '@components/XButton'
import Slide from '../_components/Slide'
import './index.less'

const prefixCls = 'page-address-list';

class Index extends Component {

  state = {
    address: '',
    list: [
      { title: '正在配送', name: "蔷薇红梅气泡", count: 2, price: 50, time: '15：30', description: '加冰+5分钟气泡', id: 1 },
      { title: '制作中', name: "蓝玫瑰红梅气泡", count: 2, price: 50, time: '15：30', description: '加冰+5分钟气泡', id: 2 },
    ]
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我的地址'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
  * 选择收获地址
  */
  chooseLocation = () => {
    Taro.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success: res => {
        const { latitude, longitude } = res
        this.setState({ latitude, longitude })
        Taro.chooseLocation({
          success: res => {
            const { address } = res

            this.setState({ address })
          }
        })
      }
    })
  }

  /**
   * 保存提交
   */
  handleSubmit = () => {

  }

  render() {
    const { address } = this.state
    return (
      <View className={`page ${prefixCls}`}>
        <View className="page-content">
        <Slide />
        </View>
        <View className="page-footer">
          <XButton type="black" size="big" block onClick={this.handleSubmit}>保存</XButton>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
