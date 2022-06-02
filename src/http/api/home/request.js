import axios from "@/http";

//获取首页banner
function getBanner(){
    return axios.get('/banner',{
        params:{
            type:'2'
        }
    })
}

//获取推荐歌单
function getPersonal() {
    return axios.get('/personalized',{
        params:{
            limit:'15'
        }
    })
}

export default {
    getBanner,
    getPersonal
};
