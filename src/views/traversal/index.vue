<template>
  <div class="traversal">
      <h2>traversal</h2>
      <button @click="click">click here</button>
      <div class="traversal-list">
          <traversal-item v-for="item in listData" :key="item.id" :item="item">
              <template v-slot:default="{ item }">
                  <!-- 方式1.1 -->
                  <!-- <input :checked="item.checked == '1'" type="checkbox" @change="item.checked = item.checked == '1' ? '0':'1'"> -->

                  <!-- 方式2.1 -->
                  <input type="checkbox" @click="clickCheckbox(item)">
                 <p>{{item.value}}</p>
              </template>
          </traversal-item>
      </div>
  </div>
</template>

<script>
import getMock from './mock'
const DATA = getMock(10000)
export default {
    name: 'traversal',
    components: {
        'traversal-item': () => import('./traversal-item.vue')
    },
    data(){
        return{
            listData: DATA,
            resultData: [] // 结果数组
        }
    },
    created(){
        // console.log(this.listData);
    },
    methods: {
        // 方式1.2
        getAllDataWithConditions(){
            this.resultData = []
            this.listData.forEach(item => {
                if(item.checked == '1'){
                    this.resultData.push(item.id)
                }
            });
        },
        click(){
            // 方式1.3
            // this.getAllDataWithConditions('倩')
            console.log(this.resultData);
        },
        // 方式2.2
        clickCheckbox(item){
            const index = this.resultData.findIndex(id => id === item.id)
            if(index !== -1){
                this.resultData.splice(index, 1)
            } else {
                this.resultData.push(item.id)
            }
        }
    }
}
</script>

<style>

</style>