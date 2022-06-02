<template>
  <div class="itemMusic">
    <div class="bgImg">
      <img :src="playlist.coverImgUrl">
    </div>
    <div class="musicTop">
      <div class="topLeft" @click="$router.back()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="topRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <div class="main">
      <div class="covImg">
        <img :src="playlist.coverImgUrl">
      </div>
      <div class="desc">
        <div>{{ playlist.name }}</div>
        <div class="author">
          <img :src="creator.avatarUrl">
          <span>
                {{ creator.nickname }}
              </span>
        </div>
        <div>{{ playlist.description }}</div>
      </div>
    </div>
    <div class="musicIcons">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liaotian"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-quanxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMusicTop",
  data() {
    return {
      playlist: {},
      creator: {}
    }
  },
  mounted() {
    this.getItemList();


  },
  methods: {
    //获取数据
    async getItemList() {
      let {id} = this.$route.query
      let {data: {playlist}} = await this.$http.getMusicItem(id)
      this.playlist = playlist
      this.$store.commit('setSubscribedCount',playlist.subscribedCount)
      this.creator = playlist.creator
    }
  }
}
</script>

<style lang="less" scoped>
.itemMusic {
  position: relative;
  padding: 0.267rem 0 0.8rem 0;

  .bgImg {
    position: absolute;
    z-index: -1;
    width: 100%;

    img {
      width: 100%;
      filter: blur(20px);
    }
  }

  .musicTop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .topLeft, .topRight {
      width: 2.133rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      fill: #ffffff;
    }

    .topLeft {
      font-size: 0.48rem;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.267rem;
    margin: 30px 0 10px 0;

    .covImg {
      width: 40%;

      img {
        width: 100%;
        border-radius: 8px;
      }
    }

    .desc {
      margin-left: 0.267rem;
      width: 70%;
      color: #fff;

      div:nth-child(1) {
        text-align: left;
        font-size: 0.373rem;
        font-weight: 700;
      }

      .author {
        display: flex;
        align-items: center;
        margin: 0.267rem 0;
        width: 0.933rem;
        font-size: 0.267rem;
        color: #cccccc;

        img {
          margin-right: 0.133rem;
          width: 80%;
          border-radius: 50%;
        }
        span{
          white-space: nowrap;
        }
      }

      div:nth-child(3) {
        height: 0.933rem;
        text-align: left;
        font-size: 0.213rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        color: #cccccc;
      }
    }
  }

  .musicIcons {
    display: flex;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #ffffff;

      .icon {
        fill: #ffffff;
      }
    }
  }

}
</style>
