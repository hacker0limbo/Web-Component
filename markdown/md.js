// utils
const e = (sel) => document.querySelector(sel)

const log = console.log.bind(console)

const appendHtml = (element, html) => (element.insertAdjacentHTML('beforeend', html))

// 在光标所在处插入文本
const typeInTextarea = (el, newText) => {
    var start = el.selectionStart
    var end = el.selectionEnd
    var text = el.value
    var before = text.substring(0, start)
    var after = text.substring(end, text.length)
    el.value = (before + newText + after)
    el.selectionStart = el.selectionEnd = start + newText.length
    el.focus()
}

const box = e('#id-content')
const textArea = e('#id-source')

// 完成实时输出功能
const md = new Remarkable({
    html: true,
    xhtmlOut: false,
    breaks: true,
    langPrefix: 'hljs language-',
    linkify: true,
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ''
    }
})

md.core.ruler.enable([
    'abbr'
]);
md.block.ruler.enable([
    'footnote',
    'deflist'
]);
md.inline.ruler.enable([
    'footnote_inline',
    'ins',
    'mark',
    'sub',
    'sup'
]);

textArea.addEventListener('input', (event) => {
    var val = event.target.value
    box.innerHTML = md.render(val)
    saveInputs()
    saveContents()
})

// 阻止 tab 的默认行为
textArea.addEventListener('keydown', function(e) {

    var keyCode = e.keyCode || e.which;
    if (keyCode == 9) {

        e.preventDefault()
        const tab = '    '
        typeInTextarea(this, tab)
    }
})

// 存储功能
// 使用 localStorage, 存 innerHTML
const save = (array, key) => {
    var s = JSON.stringify(array)
    localStorage[key] = s
}

const load = (key) => {
    var s = localStorage[key]
    if (s == undefined) {
        s = '[]'
    }
    return JSON.parse(s)
}

const saveContents = () => {
    var conts = []
    conts.push(box.innerHTML)
    save(conts, 'contents')
}

const loadContents = () => {
    var c = load('contents')
    appendHtml(box, c)
}

const saveInputs = () => {
    var inputs = []
    inputs.push(textArea.value)
    save(inputs, 'inputs')
}

const loadInputs = () => {
    var i = load('inputs')
    textArea.value = i
}

const __main = () => {
    loadContents()
    loadInputs()
}

__main()
