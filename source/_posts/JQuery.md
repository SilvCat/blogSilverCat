---
title: JQuery
date: 2023-11-02 09:00:00
cover: https://picss.sunbangyan.cn/2023/11/02/a5e5c460bb547092cc7980ab0bac936e.png
top-img: https://picss.sunbangyan.cn/2023/11/02/a5e5c460bb547092cc7980ab0bac936e.png
swiper_index: 6
---
# Jquery的介绍
jQuery 是一个快速、简洁的 JavaScript 框架，是继 Prototype 之后又一个优秀的 
JavaScript 代码库（ 或 JavaScript 框架 ）。 jQuery 设计的宗旨是 “write Less，Do More”，即倡导写更少的代码，做更多的事情。
### 1,优势：
- 轻量级。体积小，不会影响页面加载速度
- 强大的选择器
- 方便的选择页面元素（模仿 css 选择器更精确、更灵活）
- 出色的 DOM 操作的封装
- 对事件、样式、动画支持，大大简化了 DOM 操作
- 跨浏览器兼容。基本兼容了现在主流的浏览器
- 链式操作、隐式迭代
- 支持插件扩展开发。有着丰富的第三方插件。
- 免费、开源
### 2, jQuery 基本使用
    网址：https://jquery.com/
然后选择Download the compressed, production jQuery 3.7.1
把JS文件另存为，将Jquery导入HTML页面中
Markdown 插入代码块：
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="./jquery-3.7.1.js"></script>
</head>
<body>
</body>
</html>
```
## jQuery 的入口函数
- Js 入口函数会在 DOM 元素加载完毕并且图片也加载完毕之后再执行
- jQuery 入口函数会等到 DOM 元素加载完毕，但不会等到图片加载完毕再执行
### 三种写法
```HTML
    <script>
        $(document).ready(function(){
            console.log('h1');
        })
    </script>
```
```HTML
    <script>
        $(function(){
            console.log('h1');
        })
    </script>
```
```HTML
    <script>
        //类似VUE的onMount方法
        $(()=> {
            console.log('h1');
        })
    </script>
```
如果使用Vue3es5则代码段是这样的
```HTML
    <script>
        Vue.onMounted(()=>{
            console.log("Hi,所有的节点都加载成功)
        })
    </script>
```
## JQuery的顶级对象$
- $是JQuery的别称，在代码中Jquery可以用$来替代
- 冲突
    因为Jquery之前的流行,采用Jquery和$命名空间的js越来越多
## JQuery事件
常见的DON事件
|  鼠标事件   | 键盘事件  |  表单事件   |  文档/窗口事件   |
|  ----  | ----  | ----  | ----  |
| click  | 	keypress | submit   | load |
| dblclick  | keydown | change  | resize |
| mouseenter  | keyup | focus  | scroll |
| mouseleave  |  | blur  | unload |
| hover  |  |   |  |

