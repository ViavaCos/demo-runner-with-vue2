<template>
  <div class="traversal-item">
      <p>{{item.value}}</p>
  </div>
</template>

<script>
export default {
    name: 'traversal-item',
    props:{
        item: { type: Object, default: () => ({}) }
    }
}
</script>

<style>
.traversal-item{
    margin: 4px 0;
    border: 1px solid lightgreen;
}
</style>