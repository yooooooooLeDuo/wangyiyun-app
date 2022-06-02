import {createStore} from 'vuex'
import http from '@/http/api'

export default createStore({
    state: {
        songId: null,
        songUrl: '',
        songName: '',
        songPic: '',
        songAuthor: [],
        songPaused: true,
        songAutoPlay: false,
        subscribedCount: 0,
        popupOnShow: false,
        songLyric: [],
        currentTime: 0,
        duration: 0,
        songs:[],
        songIndex:0
    },
    getters: {},
    mutations: {
        //设置歌曲id值
        setSongInfo(state, info) {
            state.songId = info.id
            state.songUrl = info.url
            state.songName = info.name
            state.songPic = info.picUrl
            state.songAuthor = info.ar
            state.songLyric = info.lrcArr
            this.commit('setSongAutoPlay', true)
        },
        setSongState(state, bool) {
            this.state.songPaused = bool
        },
        setSongAutoPlay(state, bool) {
            this.state.songAutoPlay = bool
            this.state.songPaused = !bool
        },
        setSubscribedCount(state, value) {
            state.subscribedCount = value
        },
        setPopupOnShow(state) {
            state.popupOnShow = !state.popupOnShow
        },
        setLyricArr(state, arr) {
            state.songLyric = arr
        },
        setSongLongTime(state, obj) {
            state.currentTime = obj.currentTime
            state.duration = obj.duration
        },
        setSongLists(state,list){
            state.songs = list
        },
        setSongIndex(state,index){
            state.songIndex = index
        }
    },
    actions: {
        //设置单一歌曲信息
        async setSongUrl(context, obj) {
            let info = {}
            let {data: {data}} = await http.getSongUrl(obj.id)
            info.url = data[0].url
            info.id = obj.id
            info.name = obj.name
            info.picUrl = obj.al.picUrl
            info.ar = obj.ar

            let lrcArr
            let {data: {lrc}} = await http.getlyric(obj.id)
            if (lrc.lyric) {
                let arr = lrc.lyric.split('\n').filter(item => {
                    return item
                }).map((item) => {
                    let min = item.slice(1, 3)
                    let sec = item.slice(4, 6)
                    let misec = item.slice(7, 10)
                    let time = parseInt(min) * 60 + parseInt(sec) + parseInt(misec) / 1000

                    let lrcstr = item.slice(11, item.length + 1)
                    return {
                        time,
                        lrcstr
                    }
                })
                lrcArr = arr.map((item, index, arr) => {
                    if (index == 0) {
                        item.pretime = 0;
                    } else {
                        item.pretime = arr[index - 1].time
                    }
                    if (index == arr.length - 1) {
                        item.nexttime = 0
                    } else {
                        item.nexttime = arr[index + 1].time
                    }
                    return item
                })
            }
            info.lrcArr = lrcArr
            context.commit('setSongInfo', info)
        }
    },
    modules: {}
})
