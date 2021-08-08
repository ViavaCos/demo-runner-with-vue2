<template>
  <div class="lazy-img">
    <div class="img-wrap">
        <img class="a-lazy-img" data-src="https://raw.githubusercontent.com/ViavaCos/demo-runner-with-vue2/main/src/assets/imgs/1.jpg" alt="">
    </div>

    <div class="img-wrap">
        <img class="a-lazy-img" data-src="https://raw.githubusercontent.com/ViavaCos/demo-runner-with-vue2/main/src/assets/imgs/2.jpg" alt="">
    </div>

    <div class="img-wrap">
        <img class="a-lazy-img" data-src="https://raw.githubusercontent.com/ViavaCos/demo-runner-with-vue2/main/src/assets/imgs/3.jpg" alt="">
    </div>

    <div class="img-wrap">
        <img class="a-lazy-img" data-src="https://raw.githubusercontent.com/ViavaCos/demo-runner-with-vue2/main/src/assets/imgs/4.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'lazy-img',
    mounted(){
        // 获取懒加载图片的页面元素
        this.allImg = document.querySelectorAll('.a-lazy-img')
        // 为滚动事件添加事件处理函数
        document.addEventListener('scroll', this.bindScrollFn)
    },
    methods:{
        bindScrollFn(e){
            if(this.throttleFlag) return
            // console.log(e.target.scrollingElement.scrollTop);
            for (let index = 0; index < this.allImg.length; index++) {
                // console.log(ele.offsetTop);
                // console.log(this.allImg[index].src);

                // 若已有图片连接，则跳过本次循环
                if(this.allImg[index].src) continue

                // 若滚动元素滚动距离 + 滚动元素高度 >= 图片元素距顶部偏移量 (意味着页面中看到当前图片元素了)
                if(e.target.scrollingElement.scrollTop + e.target.scrollingElement.clientHeight >= this.allImg[index].offsetTop){
                    // 将自定义属性中的图片链接赋值给img元素
                    this.allImg[index].src = this.allImg[index].getAttribute('data-src')
                }
            }
            // 节流
            this.throttleFlag = setTimeout(() => {
                clearTimeout(this.throttleFlag)
                this.throttleFlag = null
            }, 500)
        }
    },
    beforeDestroy(){
        // 页面销毁前解除事件处理函数绑定
        document.removeEventListener('scroll', this.bindScrollFn())
    }
}
</script>

<style scoped>
.img-wrap {
    margin: 1024px auto 0;
    width: 198px;
    height: 198px;
    line-height: 198px;
    background-color: #ccc;
}
img {
    max-width: 198px;
    vertical-align: middle;
}
</style>