<template>
  <div class="lazy-img">
    <img src="@/assets/imgs/1.jpg" alt="">

    <img src="@/assets/imgs/2.jpg" alt="">

    <img src="@/assets/imgs/3.jpg" alt="">

    <img src="@/assets/imgs/4.jpg" alt="">
  </div>
</template>

<script>
export default {
    name: 'lazy-img'
}
</script>

<style scoped>
img {
    margin-top: 1024px;
    max-width: 198px;
    background-color: #ccc;
}
</style>