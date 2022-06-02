import axios from "axios";

//获取推荐歌单的详细信息
function getMusicItem(id) {
    return axios.get('/playlist/detail', {
        params: {
            id
        }
    })
}

//获取推荐歌单中的歌曲列表
function getMusicItemLists(id) {
    return axios.get('/playlist/track/all', {
        params: {
            id,
            limit: 20,
            offset: 0
        }
    })
}

//获取指定id的歌曲url
function getSongUrl(id) {
    return axios.get('/song/url', {
        params: {
            id
        }
    })
}

//获取歌词
function getlyric(id) {
    return axios.get('/lyric',{
        params:{
            id
        }
    })

}

//搜索
function searchByKW(keywords) {
    return axios.get('/search',{
        params:{
            keywords
        }
    })
}

export default {
    getMusicItem,
    getMusicItemLists,
    getSongUrl,
    getlyric,
    searchByKW
}
