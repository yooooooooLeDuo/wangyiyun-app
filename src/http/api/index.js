import homeApis from '@/http/api/home/request'
import musicItemApis from '@/http/api/musicItem/request'


//集中管理所有页面的api，统一向外暴露
export default {
    ...homeApis,
    ...musicItemApis
}
