<template>
  <div class="traversal">
      <h2>traversal</h2>
      <div class="traversal-list">
          <traversal-item v-for="item in listData" :key="item.id" :item="item"></traversal-item>
      </div>
  </div>
</template>

<script>
import getMock from './mock'
const DATA = Object.freeze(getMock(100))
export default {
    name: 'traversal',
    components: {
        'traversal-item': () => import('./traversal-item.vue')
    },
    data(){
        return{
            listData: DATA
        }
    },
    created(){
        console.log(this.listData);
    }
}
</script>

<style>

</style>