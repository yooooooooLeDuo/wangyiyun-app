<template>
  <TopNav></TopNav>
  <SwipeVant :swipeData="banners"></SwipeVant>
  <IconComp></IconComp>
  <music-list></music-list>
</template>

<script>
// @ is an alias to /src


import TopNav from "@/components/home/TopNav";
import SwipeVant from "@/components/home/SwipeVant";
import IconComp from "@/components/home/IconComp";
import MusicList from "@/components/home/MusicList";
export default {
  name: 'HomeView',
  components: {
    MusicList,
    IconComp,
    SwipeVant,
    TopNav
  },
  data(){
    return{
      banners:[]
    }
  },
  mounted() {
    this.getSwipeData()
  },
  methods: {
    //获取首页banner
    async getSwipeData() {
      //es6对象的连续解构赋值
      let {data: {banners}} = await this.$http.getBanner();
      this.banners = banners;
    }
  }
}
</script>
