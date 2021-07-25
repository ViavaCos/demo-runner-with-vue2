<template>
  <div class="index-bar">
    <div class="bar-wrap" @touchstart="touchstart" @touchmove="touchmove"  @touchend="touchend">
      <div
        class="bar"
        ref="bar"
        v-for="(item, index) in letters"
        :key="item.letter"
        :title="item.letter"
        :class="{ active: active == item.letter, hover: startIndex == index }"
        @click="activeLetter(item)"
      >
        <span class="bar-inner">{{item.letter}}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: { type: String, default: '' },
    letters: { type: Array, default: () => ([]) }
  },
  data () {
    return {
      startIndex: -1,
      allPosition: [],
      clientY: 0,
      distance: 0
    }
  },
  methods: {
    activeLetter (item) {
      this.$emit('change', item)
    },
    touchmove (e) {
      e.preventDefault();
      const curDom = document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY)
      if(!curDom) return
      let letter = ''
      if(curDom.classList.contains('bar')){
        letter = curDom.getAttribute('title')
      } else if(curDom.classList.contains('bar-inner')) {
        letter = curDom.innerHTML
      }
      if(letter){
        this.startIndex = this.letters.findIndex(item => item.letter === letter)
        this.$emit('change', this.letters[this.startIndex])
      }
    },
    touchstart (e) {
      const letter = e.target.innerText
      this.startIndex = this.letters.findIndex(item => item.letter === letter)
    },
    touchend(){
      this.startIndex = -1
    },
    getAllPosition () {
      const allLetters = this.$refs.bar
      // console.log(allLetters)
      if (!allLetters || !allLetters.length) return
      // console.dir(allLetters[0])
      // this.allPosition = []
      allLetters.forEach(item => {
        // console.dir(item)
        // console.log(item.offsetTop);
        this.allPosition.push(item.offsetTop)
      })

    }
  },
  mounted () {
    this.getAllPosition()
  }
}
</script>

<style lang="less" scoped>
.index-bar{
  position: relative;
  height: 100%;
}
.bar-wrap {
  height: 100%;
  padding: 6px 0;
  position: absolute;
  right: 4px;
  top: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  .bar{
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    span {
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
    }
    &.hover::after{
      position: absolute;
      top: 4px;
      left: -26px;
      content: attr(title);
      width: 16px;
      height: 16px;
      background-color: lightgreen;
      border-radius: 50%;
      font-size: 12px;
      color: #fff;
    }
    &.active {
      span{
        color: red;
        border-radius: 50%;
        background-color: lightgreen;
      }
    }
  }
}
</style>
