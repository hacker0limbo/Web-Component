/*
1. 写一个 div 有三个 img 标签
2. 只显示当前活动的 img 标签 display:none 但是添加一个 active 显示当前的
3. 加1个按钮, 点击的时候切换图片
 */

/*
要保证三个东西是一样的:
    1. slde 里面存储的active 数据
    2. active 在 img 里面的位置
    3. red 在 indicators 里面的位置
 */

// 写一个函数, 测试看含有 active 的 img 里的 id-img-x 是否和 data-active 是否相等
// 测试函数
var test = function() {
    // slide 里面存储的
    var slide = e('.slide')
    var dataActive = slide.dataset.active

    // 显示图片的 active 所在图片的位置
    var activeImg = e('.active')
    var imgId = activeImg.id
    var imgLength = imgId.length
    var activedImgId = imgId[imgLength-1]

    // 显示小圆点 red 所在 indi 的位置
    var redIndi = e('.red')
    var redIndiId = redIndi.dataset.index

    console.log(`data-active里为${dataActive}, 图片为${activedImgId}, 圆点为${redIndiId}`);
}

var bindEventButtons = function() {
    // 给所有 button 都绑上事件
    var selector = 'button'
    bindAll(selector, 'click', function(event){
        var target = event.target
        // 找到 slide 的 div
        var slide = e('.slide')
        // 得到图片总数和当前下标
        var numberOfImgs = Number(slide.dataset.imgs)
        var activeIndex = Number(slide.dataset.active)

        var imgId = 0

        if (target.classList.contains('slide-button-right')) {
            // 求出下一张图片的id (用余数)
            var nextIndex = (activeIndex + 1) % numberOfImgs
            imgId = '#id-img-' + String(nextIndex)
            // 更新父节点的 data-active
            slide.dataset.active = nextIndex
        }

        else if (target.classList.contains('slide-button-left')) {
            var previousIndex = (activeIndex + 2) % numberOfImgs
            imgId = '#id-img-' + String(previousIndex)
            // 更新父节点的 data-active
            slide.dataset.active = previousIndex
        }
        // 更新图片
        // TODO 可以考虑重构
        var className = 'active'
        removeSelfClass(className)
        var img = e(imgId)
        img.classList.add(className)
        // 更新小圆点
        var indiId = '#id-indi-' + slide.dataset.active
        var colorName = 'red'
        removeSelfClass(colorName)
        var indi = e(indiId)
        indi.classList.add(colorName)

        // 测试函数
        test()
    })
}

var bindEventIndicator = function() {
    var selector = '.slide-indi'
    bindAll(selector, 'mouseover', function(event){
        var slide = e('.slide')
        var target = event.target
        // 小圆点的 id 要和图片的 id 对应, mouseover 的时候找到对应的 id就是图片的 id
        // 获取小圆点的 id
        var indicatorId = Number(target.dataset.index)
        // 更新 图片
        var imgId = '#id-img-' + String(indicatorId)
        var className = 'active'
        removeSelfClass(className)
        var img = e(imgId)
        img.classList.add(className)
        // 更新当前的储存在 data 里面的 index
        slide.dataset.active = indicatorId
        // 更新小圆点
        var indiId = '#id-indi-' + String(indicatorId)
        var colorName = 'red'
        removeSelfClass(colorName)
        var indi = e(indiId)
        indi.classList.add(colorName)

        // 测试函数
        test()
    })
}

var __mian = function() {
    bindEventButtons()
    bindEventIndicator()
    test()
}
__mian()
