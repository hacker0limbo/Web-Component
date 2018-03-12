/*
1. 写出 html
2. 给按钮绑定事件
3. 在点击按钮的时候切换内容的显示 (使用 css属性 来控制元素的显示)
 */

 var bindEventToggle = function() {
     var b = e('.i-menu-toggle')

     bindEvent(b, 'click', function(event) {
         // 找到 menu-content
         var c = e('.i-menu-content')
         // 开关 gua-hide class
         toggleClass(c, 'hide')
     })
 }
bindEventToggle()



 var bindEventToggles = function() {
     var selector = '.menu-toggle'
     bindAll(selector, 'click', function(event){
         // 找到自己这个菜单的 menu-content
         var p = event.target.parentElement
         var c = find(p, '.menu-content')
         // 开关 gua-hide class
         toggleClass(c, 'hide')
     })
 }
bindEventToggles()
