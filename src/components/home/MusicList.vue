<template>
  <div class="musicList">
    <div class="musicTop">
      <span>发现好歌单</span>
      <div class="more">查看更多</div>
    </div>
    <div class="musicItems">
      <van-swipe :loop="false" :width="130" :show-indicators="false">
        <van-swipe-item v-for="item in musiclist" :key="item">
          <router-link :to="{
            path:'/musicitem',
            query:{
              id:item.id
            }
          }">
            <div class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
              </svg>
              <span>{{ playCount(item.playCount) }}</span>
            </div>
            <img :src="item.picUrl">
            <span>{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  data() {
    return {
      musiclist: []
    }
  },
  computed: {
    playCount() {
      return (count) => {
        if (count > 100000000) {
          return (count / 100000000).toFixed(1) + '亿'
        } else if (count > 10000) {
          return (count / 10000).toFixed(1) + '万'
        }
      }
    }
  },
  mounted() {
    this.getMusiclist()
  },
  methods: {
    async getMusiclist() {
      let {data: {result}} = await this.$http.getPersonal();
      this.musiclist = result;
    }
  }
}
</script>

<style lang="less" scoped>
.musicList {
  .musicTop {
    display: flex;
    justify-content: space-between;
    padding: 0 0.267rem;

    span {
      font-size: 0.48rem;
      font-weight: 700;
    }

    .more {
      text-align: center;
      padding: 0.133rem;
      border-radius: 0.267rem;
      border: 1px solid #ccc;
      font-size: 0.373rem;
    }
  }

  .musicItems {
    padding: 0 0.133rem;

    .van-swipe-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 0.133rem;

      .playCount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        right: 0.267rem;
        top: 0;
        font-size: 0.32rem;
        color: #fff;

        .icon {
          width: 0.427rem;
        }
      }

      img {
        width: 100%;
        border-radius: 0.267rem;
      }

      span {
        font-size: 0.32rem;
      }
    }
  }
}
</style>
