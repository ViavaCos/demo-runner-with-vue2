<template>
  <div class="virtual-list">
    <IndexBar :active="active" :letters="letters" @change="changeIndexBar">
      <VirtualList ref="VirtualList" :listData="res" :itemSize="60" @scroll="getCurrentActiveIndex">
        <template v-slot:default="{ item }">
          <template v-if="item.value !== ''">
            <input v-model="item.checked" type="checkbox" style="width:10px;height:10px;appearance: auto;">
            {{ item.value }}
          </template>

          <template v-else>
            {{ item.title }}
          </template>
        </template>
      </VirtualList>
    </IndexBar>
  </div>
</template>

<script>
import { getMockData } from './mock/index.js'

// todo del mock: 生成测试数据
// const MOCK = getMockData(52500, 2000)
// const MOCK = { letters: letters.default, list: list.default, res: res.default }

// todo del mock: 测试滚动列表索引栏自动切换
const MOCK = getMockData(5250, 200, 60)

export default {
  name: 'SupplierList',
  components: {
    VirtualList: () => import('./virtual-list.vue'),
    IndexBar: () => import('./index-bar.vue')
  },
  data () {
    return {
      active: '',
      keywords: '',
      res: MOCK.res,
      list: MOCK.list,
      letters: MOCK.letters
    }
  },
  methods: {
    handleClosePage () {},
    changeIndexBar (item) {
      this.active = item.letter
      this.$refs.VirtualList.scrollPositionTo(0, item.position)
    },
    getCurrentActiveIndex (offset) {
      if (offset <= 0) {
        this.active = this.letters[0].letter
        return
      }
      this.letters.forEach(item => {
        // 计算当前索引栏高亮值
        if (offset >= item.position) {
          this.active = item.letter
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.virtual-list {
  height: 90vh;
}
</style>
