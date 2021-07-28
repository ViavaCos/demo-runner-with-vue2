<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div ref="items"
        class="infinite-list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="!item.e_name ? { height: itemSize/2 + 'px',lineHeight: itemSize/2 + 'px', background:'#f2f2f2' } : { height: itemSize + 'px',lineHeight: itemSize + 'px' }"
      >
        <slot v-bind:item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualList',
  props: {
    // 所有列表数据
    listData: {
      type: Array,
      default: () => []
    },
    // 每项高度
    itemSize: {
      type: Number,
      default: 200
    },
    // 是否为定位滚动
    positioningScroll: {
      type: Boolean,
      default: false
    },
    // 额外展示数据量(前后各4)
    additionDataCount: {
      type: Number,
      default: 4
    }
  },
  computed: {
    // 列表总高度
    listHeight () {
      return this.listData.length * this.itemSize
    },
    // 可显示的列表项数
    visibleCount () {
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    // 偏移量对应的style
    getTransform () {
      return `translate3d(0,${this.startOffset}px,0)`
    },
    // 获取真实显示列表数据
    visibleData () {
      // 额外渲染(4+4)条数据
      if (this.additionDataCount) {
        return this.listData.slice(this.start <= this.additionDataCount ? this.start : this.start - this.additionDataCount, Math.min(this.end + this.additionDataCount, this.listData.length))
      }
      // 渲染当前可视数据
      return this.listData.slice(this.start, Math.min(this.end, this.listData.length))
    }
  },
  mounted () {
    this.screenHeight = this.$el.clientHeight
    this.start = 0
    this.end = this.start + this.visibleCount
  },
  data () {
    return {
      // 可视区域高度
      screenHeight: 0,
      // 偏移量
      startOffset: 0,
      // 起始索引
      start: 0,
      // 结束索引
      end: null
    }
  },
  methods: {
    scrollEvent () {
      // 当前滚动位置(小于0则为0 --> 防止ios弹性下拉)
      const scrollTop = this.$refs.list.scrollTop >= 0 ? this.$refs.list.scrollTop : 0
      // 此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize)
      // 此时的结束索引
      this.end = this.start + this.visibleCount
      // 此时的偏移量
      this.startOffset = (scrollTop - (scrollTop % this.itemSize))

      this.$emit('scroll', this.startOffset) // 用于计算当前激活索引值
      if (!this.additionDataCount) return
      if (this.start > this.additionDataCount) {
        this.startOffset = this.startOffset - (this.additionDataCount * this.itemSize)
      }
      // 若本次滚动为定位滚动，则需计算当前偏移量中是否需加上额外渲染数据中的标题多删去的高度
      if (this.positioningScroll) {
        this.startOffset += ([...this.visibleData].splice(0, this.additionDataCount).filter(item => !item.e_name).length * 20)
        this.$emit('done')
      }
    },
    // 滚动到指定偏移量(渲染数据将重新计算)
    scrollPositionTo (x, y) {
      this.$refs.list.scrollTo(x, y)
    }
  }
}
</script>

<style scoped>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
}

.infinite-list-item {
  display: flex;
  padding: 0 13px;
  color: #333;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
}
</style>
