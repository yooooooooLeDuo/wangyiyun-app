<template>
  <div class="musicControl">
    <div class="left" @click="setPopupOnShow">
      <div class="songPic">
        <img :src="songPic">
      </div>
      <div class="songName">
        <div>{{ songName ? songName : '等待播放' }}</div>
        <div>横滑切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true" @click="songControl" v-if="songPaused">
        <use xlink:href="#icon-zanting1"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="songControl" v-else>
        <use xlink:href="#icon-bofangzhong"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao1"></use>
      </svg>
    </div>
    <audio :src="songUrl" :autoplay="songAutoPlay" ref="songControl"></audio>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MusicControl",
  data() {
    return {}
  },
  computed: {
    ...mapState(['songUrl', 'songName', 'songPic', 'songPaused', 'songAutoPlay'])
  },
  watch: {
    songPaused() {
      switch (this.songPaused) {
        case true:
          this.$refs.songControl.pause()
          break;
        case false:
          console.dir(this.$refs.songControl)
          this.$refs.songControl.play()
      }
    }
  },
  updated() {
    setInterval(()=>{
      let obj = {
        currentTime: this.$refs.songControl.currentTime,
        duration: this.$refs.songControl.duration
      }
      this.$store.commit('setSongLongTime', obj)
    },1000)

  },
  methods: {
    songControl() {
      switch (this.songPaused) {
        case true:
          this.$refs.songControl.play()
          break;
        case false:
          this.$refs.songControl.pause()
      }
      let {paused} = this.$refs.songControl
      this.$store.commit('setSongState', paused)
    },
    setPopupOnShow() {
      this.$store.commit('setPopupOnShow', true)
    }
  }
}
</script>

<style lang="less" scoped>
.musicControl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 0 0.267rem;
  width: 100%;
  height: 1.867rem;
  border-top: 1px solid #efefef;
  background-color: #fff;

  .left {
    display: flex;
    align-items: center;

    .songPic {
      width: 1.227rem;
      height: 1.227rem;
      margin-right: 0.267rem;
      border-radius: 0.613rem;
      background-color: #a1a1a1;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .songName {
      text-align: left;
      width: 6rem;

      div:nth-child(1) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      div:nth-child(2) {
        font-size: 0.32rem;
      }
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
  }
}
</style>
