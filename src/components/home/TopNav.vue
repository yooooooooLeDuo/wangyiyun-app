<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhankailie"></use>
      </svg>
    </div>
    <div class="topContent">
      <span @click="$router.push('/myself')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo1"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style lang="less" scoped>
.topNav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.267rem;
  .topContent{
    display: flex;
    justify-content: space-around;
    width: 65%;
    .active{
      font-weight: 700;
    }
  }
}
</style>
