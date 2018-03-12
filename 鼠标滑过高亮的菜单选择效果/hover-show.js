var bindEventItems = function() {
    var selector = '.item'
    bindAll(selector, 'mouseover', function(event){
        // console.log('enter');
        var target = event.target
        target.classList.add('highlight')
    })
    bindAll(selector, 'mouseout', function(event){
        // console.log('out');
        var target = event.target
        target.classList.remove('highlight')
    })
}
bindEventItems()
