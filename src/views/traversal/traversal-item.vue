<template>
  <div class="traversal-item">
      <slot :item="item"></slot>
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
    border: 1px solid lightgreen;
}
</style>