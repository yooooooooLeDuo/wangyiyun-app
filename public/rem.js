function remSize() {
    //获取设备的宽度
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    //设置html根元素字体大小
    //把一个屏幕宽度等分为十份，根元素fontsize就设置为1/10
    //375px ---> 10rem
    // 1rem =37.5px
    document.documentElement.style.fontSize = (deviceWidth / 10) + 'px'

    //设置body在宽度375px下的默认fontsize
    document.querySelector('body').style.fontSize = 0.4 + 'rem'
}

//在rem.js文件被引入时就会执行一次代码
remSize()

//当窗口大小发生变化时会触发onresize事件
window.onresize = function () {
    remSize()
}
