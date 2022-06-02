<template>
  <div class="iconComp">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-a-dianshijidianshi"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconComp"
}
</script>

<style lang="less" scoped>
.iconComp{
  display: flex;
  justify-content: space-around;
  margin: 0.267rem 0;
  .iconItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon{
      width: 1.067rem;
      height: 1.067rem;
    }
  }
}
</style>
