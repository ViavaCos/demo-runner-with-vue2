<template>
  <div class="calc-expand">
      <h2>calc-expand</h2>
      <button @click="getMockData" style="margin-bottom:20px;">Rfresh Data</button>
      &nbsp;<span>长度:{{dataList.length}}</span>

      <div class="request">
          <p style="font-weight:bold;text-align:center;">要求：</p>
          <p>1. 渲染数据小于一行时隐藏右侧 "more.." 操作</p>
          <p>2. 渲染数据大于一行时展示右侧 "more.." 操作</p>
          <p>3. 点击 "more.." 展示所有数据</p>
          <p>4. 点击 "hide.." 仅展示一行数据</p>
          <p>Tips: 点击 "Rfresh Data" 会随机生成数组中数据</p>
      </div>

        <div class="text-content">
            <div ref="expandWrap" class="expand-wrap" :class="{ 'show-all': show }">
                <span v-for="(str, idx) in dataList" :key="idx" class="expand-item">{{ str }}</span>
            </div>
            <div v-if="showExpand" class="expand-operation" @click="show = !show">{{ show ? 'hide..' : 'more..'}}</div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'calc-expand',
    data(){
        return {
            dataList: [],
            show: false,
            showExpand: false
        }
    },
    created(){
        this.getMockData()
    },
    methods: {
        getMockData(){
            this.dataList = []
            const someStr1 = '有勇气承担命运这才是英雄好汉'
            const someStr2 = 'ItIsNeverTooLateToLearn'
            for (let index = 0; index < Date.now() % 7; index++) {
                let random1 = Math.round(Math.ceil(Math.random() * 13 + 1)  % 7)
                let random2 = Math.round(Math.ceil(Math.random() * 22 + 1)  % 7)
                this.dataList.push(someStr1.substring(random1 % 2, random1) || '空')
                this.dataList.push(someStr2.substring(random2 % 2, random2) || '空')
            }
            this.$nextTick(() => {
                this.getShowExpandStatus()
            })
        },
        getShowExpandStatus(){
            // 首行子元素偏移量 = 父容器偏移量 + 首行子元素内、外边距(padding、margin)
            const firstLineChildOffset = this.$refs['expandWrap'] ? this.$refs['expandWrap'].offsetTop + 2 + 4 : 0
            // console.log(firstLineChildOffset, 10000000086)
            this.showExpand = this.dataList.length && this.$refs['expandWrap'] && this.$refs['expandWrap'].children.length
                ? this.$refs['expandWrap'].children[this.dataList.length - 1].offsetTop > firstLineChildOffset
                : false
            // console.log(this.$refs['expandWrap'])
            // this.$refs['expandWrap'].children.length && console.log(this.$refs['expandWrap'].children)
            // this.$refs['expandWrap'].children.length && console.log(this.$refs['expandWrap'].children[this.dataList.length - 1])
            // this.$refs['expandWrap'].children.length && console.dir(this.$refs['expandWrap'].children[this.dataList.length - 1].offsetTop, this.showExpand)
        }
    }
}
</script>

<style scoped>
.text-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.request {
    text-align: left;
    font-size: 14px;
    padding: 6px 6px 6px 12px;
    margin-bottom: 20px;
    background-color: #ccc;
}
.expand-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    height: 34px;
    width: 80vw;
    background-color: lightgreen;
}
.expand-wrap.show-all {
    overflow: unset;
}
.expand-item {
    margin: 4px;
    padding: 2px 6px;
    background-color: lightpink;
}
.expand-operation {
    width: 45px;
    text-align: center;
    padding: 4px;
    color: #fff;
    background: lightskyblue;
}
</style>