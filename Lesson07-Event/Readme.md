# Event

[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)

## 事件的绑定（binding)

### 注册监听

EventTarget.addEventListener

```js
element.addEventListener(<event-name>, <callback>, <use-capture>);
// ex:
myButton.addEventListener('click', function(){alert('Hello world');}, false);
```

HTML 属性(不推荐)

```html
<button onclick="alert('Hello world!')">
```

DOM 元素属性

```js
myButton.onclick = function(event){alert('Hello world');};
```

### q注销监听

EventTarget.removeEventListener

```js
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

[实例：Hello Once](https://jsbin.com/nivoqoz/edit?html,js,output)

### Event handler

```js
function handleClick(event) {
  ...
}
```

## Event 对象属性和方法

- [event.target](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target) 触发事件的当前元素
- [event.type](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/type) 事件类型

- [event.preventDefault()](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault) 阻止默认动作
- [event.stopPropagation()](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation) 停止冒泡
- [event.stopImmediatePropagation()](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation) 立即停止冒泡

## 事件冒泡
![](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/603c2b38-eaa7-4806-b5bc-cf7b3edbcd68/eventflow.png)

- [范例](https://jsbin.com/xowivuf/edit?js,console,output)
- [演示](https://jsbin.com/surivup/edit?html,console,output)
- [动态演示](https://jsbin.com/vusopil/edit?css,js,output)

- [blur](https://jsbin.com/joneguy/edit?html)
- [change](https://jsbin.com/cifufaq/edit?html,output)
- [focus](https://jsbin.com/hesivoc/1/edit?html,output)
- [select](https://jsbin.com/motoyut/edit?html,output)
- [submit](https://jsbin.com/riwagul/edit?html,output)
- [reset](https://jsbin.com/tuwevog/edit?html,output)
- [keydown](https://jsbin.com/comenit/edit?html,output)
- [keypress](https://jsbin.com/dohisaj/edit?html,output)
- [keyup](https://jsbin.com/kubowax/edit?html,output)
- [keyup2](https://jsbin.com/puyocap/edit?html,output)
- [keydown & keyup](https://jsbin.com/bebatac/edit?html,output)

Mouse Event

- [mouseover & mouseout](https://jsbin.com/webureb/edit?html,output)
- [mousedown & mouseup](https://jsbin.com/zugexud/edit?html,output)
- [mousedown](https://jsbin.com/xosunac/edit?html,output)
- [mousedown](https://jsbin.com/denoxox/edit?html,output)
- [mouseover & mouseout](https://jsbin.com/foxasif/edit?html,output)
- [mouseover & mouseout](https://jsbin.com/tejucas/1/edit?html,output)
- [mouseover](https://jsbin.com/quqasos/1/edit?html,output)

Click

- [click](https://jsbin.com/cosuyoc/edit?html,output)
- [which button click](https://jsbin.com/yesigit/edit?html,output)
- [dblclick](https://jsbin.com/dihibeh/edit?html,output)

- [load](https://jsbin.com/suzuxaf/edit?html,output)
- [img onload](https://jsbin.com/vuqakuh/edit?html,output)
- [error](https://jsbin.com/dukesoy/edit?html,output)
- [resize](https://jsbin.com/gaquyix/edit?html,output)

other
- [keycode](https://jsbin.com/wexebiq/edit?html,output)
- [coordinates](https://jsbin.com/hoyetaj/edit?html,output)
- [coordinates to screen](https://jsbin.com/camifin/edit?html,output)
- [shift key press](https://jsbin.com/digizem/1/edit?html,output)
- [event type](https://jsbin.com/dabiruy/edit?html,output)