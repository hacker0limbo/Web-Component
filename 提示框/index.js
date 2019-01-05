var Alert = function(title, message) {
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                ${message}
            </div>
            <div class='modal-control'>
                <button class="modal-button" type="button" name="button">ok</button>
            </div>
        </div>
    </div>
    `
    var body = e('body')
    appendHtml(body, t)
        // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-button {
            width: 100%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    var head = e('head')
    appendHtml(head, css)
        // event
    e('.modal-button').addEventListener('click', function() {
        console.log('click ok')
        removeAll('.modal-remove')
    })
}


var Alert2 = function(title, message, callback) {
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                ${message}
            </div>
            <div class='modal-control'>
                <button class="modal-button" type="button" data-type="cancel">Cancel</button>
                <button class="modal-button" type="button" data-type="ok">Ok</button>
            </div>
        </div>
    </div>
    `
    var body = e('body')
    appendHtml(body, t)
        // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-control {
            font-size: 0;
        }
        .modal-button {
            width: 50%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    var head = e('head')
    appendHtml(head, css)
        // event
    bindAll('.modal-button', 'click', function(event) {
        // e('body').addEventListener('click', function(event){
        console.log('click button')
        var type = event.target.dataset.type
        if (type === 'cancel') {
            callback(false)
        } else {
            callback(true)
        }
        removeAll('.modal-remove')
    })
}


var Prompt = function(title, callback) {
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                <input class='modal-input' type='text'>
            </div>
            <div class='modal-control'>
                <button class="modal-button" data-type="cancel">Cancel</button>
                <button class="modal-button" data-type="ok">Ok</button>
            </div>
        </div>
    </div>
    `
    appendHtml(e('body'), t)
        // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-input {
            width: 100%;
        }
        .modal-control {
            font-size: 0;
        }
        .modal-button {
            width: 50%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    appendHtml(e('head'), css)
        // event
    bindAll('.modal-button', 'click', function(event) {
        console.log('click button')
        var type = event.target.dataset.type
        if (type === 'cancel') {
            callback(false)
        } else {
            var input = e('.modal-input').value
            callback(true, input)
        }
        removeAll('.modal-remove')
    })
}


var buttonTemplate = function(title, index) {
    var t = `
        <button class='modal-action-button'
                data-index="${index}">${title}</button>
    `
    return t
}

var Actions = function(title, actions, callback) {
    var buttons = []
    for (var i = 0; i < actions.length; i++) {
        var a = actions[i]
        buttons.push(buttonTemplate(a, i))
    }
    var actionButtons = buttons.join('')
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                ${actionButtons}
            </div>
            <div class='modal-control'>
                <button class="modal-button modal-action-button" data-index="-1">Cancel</button>
            </div>
        </div>
    </div>
    `
    appendHtml(e('body'), t)
        // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-input {
            width: 100%;
        }
        .modal-control {
            font-size: 0;
        }
        button {
            width: 100%;
        }
        .modal-button {
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    appendHtml(e('head'), css)
        // event
    bindAll('.modal-action-button', 'click', function(event) {
        console.log('click button')
        var index = event.target.dataset.index
        callback(index)
        removeAll('.modal-remove')
    })
}