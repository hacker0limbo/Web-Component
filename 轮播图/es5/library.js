var log = function() {
    console.log.apply(console, arguments)
}

// 选择函数
var e = function(selector) {
    return document.querySelector(selector)
}

// 添加 html
var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}

// 绑定事件
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

// 如果元素有特定的类, 就删除, 否则添加
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

// 通过类名找到第一个元素, 并且删除该元素的类
var removeSelfClass = function(className) {
    var selector = '.' + className
    var element = e(selector)
    element.classList.remove(className)
}

// 通过类名删除所有含有这个类的元素的类
var removeselfClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

// 给所有拥有同样类的元素绑定事件
var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
var find = function(element, selector) {
    return element.querySelector(selector)
}
