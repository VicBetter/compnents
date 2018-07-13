
function Toast() {
    this.init.apply(this, arguments)
}
Toast.prototype = {
    init: function (msg, timeout, callback) {
        this.callback = callback
        this.msg = typeof msg == 'string' ? msg : JSON.stringify(msg)
        this.timeout = timeout || 2000
        this.render()
        var self = this
        setTimeout(function () {
            self.remove()
        }, this.timeout)
    },
    render: function () {
        this.ele = document.createElement('div')
        this.mask = document.createElement('div')
        var eleStyle = {
            position: 'fixed',
            width: '50%',
            height: 'auto',
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '10px',
            textAlign: 'center',
            margin: 'auto',
            borderRadius: '4px',
            left: 0,
            top: '30%',
            right: 0,
            zIndex: 1002,
            fontSize: '12px',
            wordBreak: 'break-word',
            color: '#ffffff'
        }
        var maskStyle = {
            position: 'fixed',
            zIndex: 1001,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
        for (var k in eleStyle) {
            this.ele.style[k] = eleStyle[k]
        }
        for (var k in maskStyle) {
            this.mask.style[k] = maskStyle[k]
        }
        this.ele.innerHTML = this.msg
        document.body.appendChild(this.mask)
        document.body.appendChild(this.ele)
    },
    remove: function () {
        var self = this
        var intervalId = null
        var opacity = 1
        intervalId = setInterval(function () {
            opacity = opacity - 0.05
            self.ele.style.opacity = opacity
            if (opacity <= 0) {
                clearInterval(intervalId)
                self.ele.remove()
                self.mask.remove()
                self.callback && self.callback()
            }
        }, 10)
    }

}
// Es6
// class Toast {
//     constructor(...agr) {
//         this.init(...agr)
//     }
//     init(msg, timeout, callback) {
//         this.callback = callback
//         this.msg = typeof msg == 'string' ? msg : JSON.stringify(msg)
//         this.timeout = timeout || 2000
//         this.render()
//         setTimeout(e => {
//             this.remove()
//         }, this.timeout)
//     }
//     render() {
//         this.ele = document.createElement('div')
//         this.mask = document.createElement('div')
//         const eleStyle = {
//             position: 'fixed',
//             width: '50%',
//             height: 'auto',
//             background: 'rgba(0, 0, 0, 0.7)',
//             padding: '10px',
//             textAlign: 'center',
//             margin: 'auto',
//             borderRadius: '4px',
//             left: 0,
//             top: '30%',
//             right: 0,
//             zIndex: 1002,
//             fontSize: '12px',
//             wordBreak: 'break-word',
//             color: '#ffffff'
//         }
//         const maskStyle = {
//             position: 'fixed',
//             zIndex: 1001,
//             left: 0,
//             top: 0,
//             right: 0,
//             bottom: 0,
//             left: 0
//         }
//         for (const k in eleStyle) {
//             this.ele.style[k] = eleStyle[k]
//         }
//         for (const k in maskStyle) {
//             this.mask.style[k] = maskStyle[k]
//         }
//         this.ele.innerHTML = this.msg
//         document.body.appendChild(this.mask)
//         document.body.appendChild(this.ele)
//     }
//     remove() {
//         let intervalId = null
//         let opacity = 1
//         intervalId = setInterval(() => {
//             opacity = opacity - 0.05
//             this.ele.style.opacity = opacity
//             if (opacity <= 0) {
//                 clearInterval(intervalId)
//                 this.ele.remove()
//                 this.mask.remove()
//                 this.callback && this.callback()
//             }
//         }, 10)
//     }
// }

// export default Toast
// new Toast('提示', 2000)