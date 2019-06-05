import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import XRolling from '@components/XRolling'
import XModal from '@components/XModal'
import Item from './Item'
import './index.less'

const prefixCls = 'components-menu-modal-detail';

export interface CardProps {
  // 数据源
  dataSource?: any;
  // 操作
  operation?: any;
}

class Index extends Component<CardProps> {

  static defaultProps = {
    title: "",
    dataSource: {},
    operation: ""
  }

  state = {
    // 规格类型
    specsData: [
      { id: 1, value: '三分钟气泡', type: 2 },
      { id: 2, value: '五分钟气泡', type: 3 },
    ],
    // 选中的规格标识
    specsActvieKey: 2,
    // 温度类型
    temperatureData: [
      { id: 1, value: '正常冰(推荐)', type: 2 },
      { id: 2, value: '少冰', type: 3 },
      { id: 3, value: '少少冰', type: 4 },
      { id: 4, value: '去冰', type: 5 },
      { id: 5, value: '多冰', type: 6 },
      { id: 6, value: '不加冰', type: 7 },
    ],
    // 选中的温度标识
    temperatureActvieKey: 5
  }

  componentDidMount() {
  }

  handleRolling = (count) => {
    console.info(count)
  }

  /**
   * 规格
   * @params item 被选钟规格的数据
  */
  handleSpecsClick = (item) => {
    const { type } = item
    this.setState({ specsActvieKey: type })
  }

  /**
   * 规格
   * @params item 被选钟规格的数据
  */
  handleTemperatureClick = (item) => {
    const { type } = item
    this.setState({ temperatureActvieKey: type })
  }

  render() {
    const { dataSource, operation } = this.props
    const { specsData, specsActvieKey, temperatureData, temperatureActvieKey } = this.state

    return (
      <XModal>
        <View className={`${prefixCls}`}>
          <View className={`${prefixCls}-header`}>
            <Image src={dataSource.src || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559141090669&di=dac14b86f6855b4f3453f03f773a6c3b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F28%2F20150928012450_HzGKk.jpeg"} mode="aspectFit" />
          </View>
          <View className={`${prefixCls}-body`}>
            <View className={`${prefixCls}-body-name`}>
              {dataSource.name}
            </View>
            <Item
              title="规格"
              dataSource={specsData}
              activeKey={specsActvieKey}
              onClick={this.handleSpecsClick}
            />
            <Item
              title="温度"
              dataSource={temperatureData}
              activeKey={temperatureActvieKey}
              onClick={this.handleTemperatureClick}
            />
            <View className={`${prefixCls}-body-description`}>
              {dataSource.description}
            </View>
            <View className={`${prefixCls}-body-footer`}>
              <View className={`${prefixCls}-body-footer-price`}>
                ￥ {dataSource.price}
              </View>
              <View className={`${prefixCls}-body-footer-plus`}>
                <XRolling onChange={this.handleRolling} />
              </View>
            </View>
          </View>
        </View>
      </XModal>
    )
  }
}

export default Index
