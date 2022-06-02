<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in swipeData" :key="image">
        <img :src="image.pic"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "SwipeVant",
  props:{
    swipeData:{
      type:Array
    }
  }
}
</script>

<style lang="less" scoped>
.swipe {
  padding: 0 0.267rem;
  .van-swipe .van-swipe__track .van-swipe-item{
        img{
          width: 100%;
        }
  }
}
</style>
