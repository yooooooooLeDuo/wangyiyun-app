<template>
  <div class="musicList">
    <div class="listTop">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span>播放全部</span>
        <span>(共{{ musicLists.length }}首)</span>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>
    <div class="songLists">
<!--      <div class="song" v-for="(item,index) in musicLists" :key="item" @click="setSongInfo(item)">-->
      <div class="song" v-for="(item,index) in musicLists" :key="item" @click="setSongInfo(index)">
        <div class="songIndex">{{ index + 1 }}</div>
        <div class="songDesc">
          <div class="songName">{{ item.name }}</div>
          <div class="songAu">
            <span v-for="au in item.ar" :key="au.id">{{ au.name }}</span>
          </div>
        </div>
        <div class="songIcon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mv" v-if="item.mv"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ItemMusicList",
  data() {
    return {
      musicLists: []
    }
  },
  computed:{
    subscribedCount(){
      let count = this.$store.state.subscribedCount
      if (count > 100000000) {
        return (count / 100000000).toFixed(1) + '亿'
      } else if (count > 10000) {
        return (count / 10000).toFixed(1) + '万'
      }
    },
    ...mapState(['songs'])
  },
  mounted() {
    this.getMusicLists()
  },
  methods: {
    //获取数据
    async getMusicLists() {
      let {id} = this.$route.query
      let {data: {songs}} = await this.$http.getMusicItemLists(id)
      this.musicLists = songs
      this.$store.commit('setSongLists',songs)
    },
    //获取单一歌曲信息
    setSongInfo(index) {
      //将song值直接传递给mutations
      let song = this.songs[index]
      this.$store.dispatch('setSongUrl',song)
      this.$store.commit('setSongIndex',index)
      // this.$store.commit('setSongState',false)
      // this.$store.commit('setSongAutoPlay',true)
    }
  }
}
</script>

<style lang="less" scoped>
.musicList {
  padding: 0.267rem 0.267rem 2rem 0.267rem;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  .listTop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left, .right {
      display: flex;
      align-items: center;

      & .icon {
        margin-right: 0.267rem;
      }
    }

    .left {
      span:nth-child(2) {
        font-size: 0.427rem;
        font-weight: 700;
      }

      span:nth-child(3) {
        font-size: 14px;
        color: #ccc;
      }
    }

    .right {
      padding: 0.267rem;
      background-color: #f32b2b;
      border-radius: 0.667rem;
      color: #fff;
    }
  }

  .songLists {
    .song {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.267rem 0;

      .songIndex {
        width: 10%;
      }

      .songDesc {
        width: 70%;
        text-align: left;

        .songName {
          font-weight: 700;
        }

        .songAu {
          font-size: 0.32rem;
          color: #adadad;
        }
      }

      .songIcon {
        display: flex;
        justify-content: space-between;
        width: 20%;
      }
    }
  }
}
</style>
