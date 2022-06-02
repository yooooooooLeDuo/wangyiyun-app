<template>
  <div class="itemDesc">
    <div class="bgi" :style="{backgroundImage:`url(${songPic})`}"></div>
    <div class="top">
      <div class="desc">
        <svg class="icon" aria-hidden="true" @click="setPopupOnShow">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">
          <div>{{ songName }}</div>
          <div>
            <span v-for="item in songAuthor">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="cd-main" v-show="!isShowLrc">
      <img src="@/assets/cd.png">
      <img src="@/assets/needle-ab.png" :class="{img_active:!songPaused,img_needle:songPaused}">
      <img :src="songPic" :class="{animationRun:!songPaused,animationPaused:songPaused}" class="img_pic"
           @click="isShowLrc=!isShowLrc">
    </div>
    <div class="lrc" v-show="isShowLrc" ref="lrcScrol" @click="isShowLrc=!isShowLrc">
      <p v-for="item in songLyric" :class="{active:currentTime > item.time && currentTime < item.nexttime}">
        {{ item.lrcstr }}</p>
    </div>
    <div class="control-cont">
      <div class="topIcons">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shequ"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liaotian"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuaxin"></use>
        </svg>
      </div>
      <div class="step">
        <input type="range" min="0" :max="duration" v-model="currentTime">
      </div>
      <div class="bottomIcons">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuaxin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="changeSong(songIndex-1)">
          <use xlink:href="#icon-shangyishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true" :style="{width:'1.333rem',height:'1.333rem'}" v-if="songPaused"
             @click="playSong">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" :style="{width:'1.333rem',height:'1.333rem'}" v-else @click="playSong">
          <use xlink:href="#icon-bofangzhong"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="changeSong(songIndex+1)">
          <use xlink:href="#icon-xiayishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofangliebiao"></use>
        </svg>
      </div>
    </div>

  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "ItemDesc",
  data() {
    return {
      isShowLrc: false
    }
  },
  computed: {
    ...mapState(['songName', 'songAuthor', 'songPic', 'songPaused', 'songLyric', 'currentTime', 'duration', 'songs', 'songIndex'])
  },
  watch: {
    currentTime() {
      let p = document.querySelector("p.active")
      if (p) {
        if (p.offsetTop > 250) {
          this.$refs.lrcScrol.scrollTop = p.offsetTop - 250
        }
      }
    }
  },
  methods: {
    playSong() {
      if (this.songPaused) {
        this.$store.commit('setSongState', false)
      } else {
        this.$store.commit('setSongState', true)
      }
    },
    ...mapMutations(['setPopupOnShow']),
    changeSong(index) {
      if (index <= 0 || index >= this.songs.length - 1) {
        return false;
      }
      this.$store.dispatch('setSongUrl', this.songs[index])
      this.$store.commit('setSongIndex', index)
    }
  }
}
</script>

<style lang="less" scoped>
.itemDesc {
  position: relative;
  padding: 0.267rem;
  height: 100%;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    height: 10%;

    .desc {
      display: flex;
      align-items: center;

      .title {
        margin-left: 0.533rem;
      }

    }
  }

  .cd-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    position: relative;

    .img_needle {
      position: absolute;
      transform-origin: 0 0;
      transform: translate(50%, -50%) rotate(-15deg);
      width: 2.267rem;
      z-index: 1;
      transition: all 2s;
    }

    .img_active {
      position: absolute;
      transform-origin: 0 0;
      transform: translate(50%, -50%) rotate(0deg);
      width: 2.267rem;
      z-index: 1;
      transition: all 2s;
    }

    img:nth-child(1) {
      position: absolute;
    }

    .img_pic {
      position: absolute;
      width: 3.467rem;
      height: 3.467rem;
      border-radius: 50%;
      animation: rotate_t 15s linear infinite;
    }

    @keyframes rotate_t {
      from {
        transform: rotateZ(360deg);
      }
    }

    .animationPaused {
      animation-play-state: paused;
    }

    .animationRun {
      animation-play-state: running;
    }
  }

  .lrc {
    width: 100%;
    height: 70%;
    overflow: scroll;

    p {
      margin: 20px 0;
    }

    .active {
      color: #ffffff;
      font-size: 18px;
      transition: all .5s;
    }
  }

  .control-cont {
    height: 20%;
    color: #ffffff;

    .topIcons, .bottomIcons {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .step {
      height: 1.333rem;
      display: flex;
      align-items: center;

      input {
        width: 100%;
        height: 0.133rem;
      }
    }
  }

  .bgi {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -5;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(0.8rem);
  }
}

</style>
