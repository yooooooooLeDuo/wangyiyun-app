import {Swipe, SwipeItem, Popup} from 'vant';

//将使用到的vant组件包装成数组，进行循环遍历调用app.use()
let vantArray = [Swipe, SwipeItem, Popup];

export default function registerVant(app) {
    vantArray.forEach(item => {
        return app.use(item);
    })
}
