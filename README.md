# note

存在的bug：

- 两边为啥对不齐  
  solution:
    -flex布局 space-between
    -margin 左右宽度auto
    -max-width 最大宽度进行伸缩 ？？？和目标网页似乎还是有所不同
- 图片和文字对不齐
  solution：
    -flex布局
    -align-center实现居中
- search框还没做完

- 背景还没设置
  ——无效？？？
- Code 字体似乎不太对？？
- 主要内容宽度
   -目前设计成 max-width 但与目标网页不太对 目标网页是左边宽度不变的缩减
- 移动宽度的情况下页面调整

— 首页使用flex和overflow没法实现固定

# bugfix

- [x] header 的 border 没有撑开
- [x] header 没有吸顶
  - 方案1: `position: sticky` `position: sticky;top:0;`
  - 方案2: `position: fixed + margin-top` `position: fixed;width:100%;top:0;`
- [x] 背景点点没出来
- [x] footer 宽度没撑满
- [x] footer 跟上面内容的间距有时候不足
- [x] link 之间的点可以使用 `:before` 更优雅的实现
- [x] #hover效果
- [x] header 上的输入框还没好
- [x] 中间的 links(.nav) 的那些，要左右居中
- [x] header 的 title 在宽度不够的时候也不要换行

# 学习

- [x] flex 布局
- [x] css 选择器
  - [https://blog.csdn.net/weixin_44691608/article/details/106603985](https://blog.csdn.net/weixin_44691608/article/details/106603985)
  - [x] 掌握基础的伪选择器 `:hover, :active`
- [x] css 权重（可选）
  - [https://blog.csdn.net/weixin_44691608/article/details/106649186](https://blog.csdn.net/weixin_44691608/article/details/106649186) 
- [x] position 定位
  - relative、absolute、fixed 差异
  - 之前用的 sticky 对比

# 下一步

之后要做的可以先看也可以先不看

## 第一阶段：原生 JS

- 学习
  - [x] 基础 JS 语法
    - [x] 学习插入 JS 的方法（一样分为内联与外联）
    - var、let、const 区别（尤其是作用域）
    - function 与作用域
  - [x] dom 相关 API 了解
  - [x] 了解什么是 ECMAScript，什么是 ES6
  - [x] 【ES6】学习模版字符串
  - [x] 【ES6】学习解构赋值
  - [x] 学习数组常用方法(for 循环、for in、for of)，函数式或是叫流式方法（map、filter、forEach、reduce）
  - [x] 格式化工具的使用
    - 了解一下 prettier、editorconfig
  - [x] addEventListener、removeEventListener
  - [x] Element.classList 对象用法
  - [ ] 了解常见事件 MouseEvent, KeyboardEvent, blablabla
    - clientX, clientY
    - path
  - [ ] Event Flow 事件流(冒泡、捕获)
- 修改
  - [x] 使用 JS 创建与操作 dom 元素
  - [x] 使用 for 循环生成列表项
  - [x] 使用 JS 动态调整样式、计时器实战
    - [x] 使用计时器实现打字机效果展现 title
    - [x] Overview 段落实现手风琴效果
  - [x] 初步理解 Component 概念
    - [x] 动手使用 template 作为模版、JS 修改内容后快速生成 html

## 第二阶段：React 改造

- 学习
  - [x] 了解 JS 基础语法
  - [x] 了解 ES6，重点了解
    - [x] let、const
    - [x] Array（map、filter、forEach、reduce）
    - [x] Arrow Function
    - [x] Class（了解 ES5 的 function Class 与 ES6 的 class 写法差异）
    - [x] 了解原型链是啥
  - [x] 了解 React 基础语法：JSX、项目构建
  - [x] 阅读完 React 基础教程
    - [x] [https://blog.csdn.net/weixin_44691608/article/details/117343164](https://blog.csdn.net/weixin_44691608/article/details/117343164)
- 修改
  - [x] 使用 React 重写一次
  - [x] 进行 Component 的详细划分
    - [x] Header
    - [x] Content
      - [x] 橘色高亮框
      - [x] 蓝色代码框
    - [x] Footer
    - [x] const函数

### JS 问题

- [x] 作用域、var let const
- [x] call、bind、apply
- [x] function 箭头函数
- [ ] arguments

## 第三阶段：React 核心

基础 = Class Component = Function Component + Hook

- [ ] Class 组件写法
  - [ ] props
  - [ ] state
  - [ ] LifeCycle: DidMount, DidUpdate
  - [ ] Event: onClick
    - [ ] function, bind, this.xxx
  - [ ] Form: onSubmit, onChange, onInput
  - [x] 受控组件 vs 非受控组件
  - [x] Context API
    - [x] renderProps
  - [x] ref
    - [x] ref 一般元素 => 真实 dom 元素
    - [x] ref 组件？ =>
    - [x] ref 透传
    - [x] callback ref
- [ ] Function 组件写法(use)
  - [ ] props
  - [x] state => useState
  - [x] LifeCycle => useEffect
  - [x] function? => useCallback
  - [x] computed => useMemo
  - [x] ref => useRef(HTMLElement, variable)
  - [x] ContextAPI => useContext
  - [x] Custom Hook
- 进阶使用方法
  - HOC
  - Render Props


## 第四阶段：React Router

加入路由

## 第五阶段：React 状态管理

# 1月后计划

1. 熟悉 FC 写法
2. 状态管理：Redux/Flux（recoil、jotai；zustand、mobx、rxjs(lodash? rxjs = lodash for async)）
3. (options)路由

4. Project -> 面试？练手？Real App？
5. 工程化
   - Web = 前后端分离
   - 前端（静态文件资源）
     - App 内容
       - data -> view（Component）
       - UI
         - React
         - Vue（屏蔽 dom 操作）
       - 状态管理
       - 多页面 -> 路由
     - 工程化
       - web = html + css + js（静态）
       - 构建（看）
         - create-react-app
         - NPM = Node.js Project Management
           - npm
           - yarn
           - pnpm
           - tnpm
         - 打包工具 webpack/rollup/vite
           - 流程：识别模块 -> 生成模块依赖表 -> chunk -> 生成终产物
         - 编译工具
           - babel
       - 部署
         - http 服务器（静态资源服务器）
   - 后端（logic -> 进程 progress）
     - service（logic）+ DB（持久化）
     - 服务器 = 处理网络请求（http）
       - HTTP = HEADER + body
         - content-type
         - html
         - js
         - jpeg
         - JSON

- Vue3？
1. 同步 / 异步（面试）
- ？

- 代码的问题
1. 子组件如何传数据给父组件，ColorItem被注释掉的部分就是因为传递有问题
2. 不知道是先去写css还是先实现功能
3. 组件的切割也很模糊，就感觉比如色块展现的判断可以放在色块组件的外面，也可以放在色块组件的里面
4. 还有就是确实写得太慢了qaq
5. 就是数据都应该放在父组件里面嘛还是啥？ 这些有点理不清楚www
ps 目前实现的是点击“选择器样式”打开和关闭调色盘，数据还都没连接qaq
