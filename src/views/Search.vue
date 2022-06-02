<template>
  <div class="search">
    <div class="top">
      <svg class="icon" aria-hidden="true" @click="$router.back()">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <input type="text" v-model="keyword" @keyup.enter="enterKW" placeholder="陈奕迅">
    </div>
    <div class="histort">
      <div class="icons">
        <span>搜索历史</span>
        <svg class="icon" aria-hidden="true" @click="removekw">
          <use xlink:href="#icon-lajitongshanchu"></use>
        </svg>
      </div>
      <div class="his">
        <span v-for="item in historyArr" :key="item" @click="goSearch(item)">{{ item }}</span>
      </div>
    </div>
    <div class="songLists">
      <!--      <div class="song" v-for="(item,index) in musicLists" :key="item" @click="setSongInfo(item)">-->
      <div class="song" v-for="(item,index) in songsList" :key="item">
        <div class="songIndex">{{ index + 1 }}</div>
        <div class="songDesc">
          <div class="songName">{{ item.name }}</div>
          <div class="songAu">
            <span v-for="au in item.artists" :key="au.id">{{ au.name }}</span>
          </div>
        </div>
        <div class="songIcon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mv" v-if="item.mvid"></use>
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
export default {
  name: "Search",
  data() {
    return {
      keyword: '',
      historyArr: [],
      songsList:[]
    }
  },
  mounted() {
    let strarr = localStorage.getItem('historyArr')
    if (strarr) {
      this.historyArr = JSON.parse(strarr)
    }
  },
  methods: {
    async enterKW() {
      if (this.keyword !== '') {
       let {data:{result:{songs}}} = await this.$http.searchByKW(this.keyword)
        this.songsList = songs
        this.historyArr.unshift(this.keyword)
        this.historyArr = [...new Set(this.historyArr)]
        localStorage.setItem('historyArr', JSON.stringify(this.historyArr))
        this.keyword = ''
      }
    },
    removekw(){
      localStorage.removeItem('historyArr')
      this.historyArr = []
    },
    async goSearch(kw){
      let {data:{result:{songs}}} = await this.$http.searchByKW(kw)
      this.songsList = songs
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding: 0.267rem;

  .top {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 0.4rem;
    }

    input {
      padding: 5px;
      width: 90%;
      border: none;
      border-bottom: 1px solid #888;
    }
  }

  .histort {
    .icons{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .his {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      span {
        margin: 0.133rem 0.267rem;
        padding: 0.133rem 0.267rem;
        height: 100%;
        border-radius: 0.133rem;
        border: 0.027rem solid #cccccc;
      }
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
