let html = document.querySelector('.box')
let style = document.querySelector('style')
let description = `/*你好！我是小u，我来展示一下我的前端功底。
首先清除一些默认样式*/
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
/*
媒体查询，如果是移动端设备，需要设置新样式
*/
@media (max-width: 500px) {
    .box {
        position: fixed;
        top: 50vh;
        height:50vh;
        overflow:auto
    }
}
/*
设置内容颜色为红色，并让内容自动换行
*/
body {
    color:red;
    word-break: break-all;
}

/*
现在开始准备一个div
然后用这个div来制作一个八卦图
*/
.gossip {
    position:fixed;
    top:0px;
    left: 50vw;
    transform: translate(-50%);
    width:300px;
    height:300px;
    border:1px solid black;
    border-radius:50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 50%, 
    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
使用伪元素before、after来制作八卦图的内半圆
在内半圆中使用css的颜色渐变实现中心的小圆
*/
.gossip::before{
    content:'';
    display:block;
    height:50%;
    width:50%;
    margin-left:50%;
    transform:translate(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 20%, 
    rgba(255,255,255,1) 20%, 
    rgba(255,255,255,1) 100%);
}

.gossip::after {
    content:'';
    display:block;
    height:50%;
    width:50%;
    margin-left:50%;
    transform:translate(-50%);
    border-radius:50%;
    background: radial-gradient(circle, 
        rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, 
        rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}

/*
八卦图制作好啦！感谢观看！
*/
`
let i = 0
let string2 = ''
let desLength = description.length
var step = () => {
	if (i < desLength) {
		setTimeout(() => {
			if (description[i] === '\n') {
				string2 += '<br>'
			} else if (description[i] === ' ') {
				string2 += '&nbsp;'
			} else {
				string2 += description[i]
			}
			html.innerHTML = string2
			window.scrollTo(0, 9999)
			html.scrollTo(0, 9999)
			style.innerHTML = description.substring(0, i)

			i += 1
			step()
		}, 35)
	}
}
step()
