var buttons = document.querySelector('.buttons');
var buttonArr = buttons.children
var square = document.querySelector('#id-div-square');
var toAddClass = ['broaden', 'higher', 'color', 'hide', 'original']

// 返回子元素在父元素的下标, 传进来的是目标子节点
var indexOfParent = function(childElement) {
    var parent = childElement.parentElement
    var childrenArr = parent.children
    for (var i = 0; i < childrenArr.length; i++) {
        var eachChild = childrenArr[i]
        if (eachChild.value === childElement.value) {
            return i
        }
    }
}

// 事件委托
buttons.addEventListener('click', function(event){
    var target = event.target
    var index = indexOfParent(target)
    if (index === toAddClass.length - 1) {
        square.className = toAddClass[toAddClass.length-1]
    }
    square.classList.add(toAddClass[index])
})
