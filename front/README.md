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
- [ ] css 选择器
  - [https://blog.csdn.net/weixin_44691608/article/details/106603985](https://blog.csdn.net/weixin_44691608/article/details/106603985)
  - [ ] 掌握基础的伪选择器 `:hover, :active`
- [ ] css 权重（可选）
  - [https://blog.csdn.net/weixin_44691608/article/details/106649186](https://blog.csdn.net/weixin_44691608/article/details/106649186) 
- [ ] position 定位
  - relative、absolute、fixed 差异
  - 之前用的 sticky 对比

# 下一步

之后要做的可以先看也可以先不看

## 第一阶段：原生 JS

- 学习
  - [ ] 使用 JS 创建与操作 dom 元素
  - [ ] dom 相关 API 了解
- 修改
  - [ ] 使用 for 循环生成列表项
  - [ ] 使用 JS 动态调整样式
  - [ ] 使用计时器实现打字机效果展现 title
  - [ ] 初步理解 Component 概念

## 第二阶段：React

- 学习
  - [ ] 了解 JS 基础语法
  - [ ] 了解 ES6，重点了解 let、const、Array、Arrow Function
  - [ ] 了解 React 基础语法：JSX、项目构建
- 修改
  - [ ] 使用 React 重写一次
  - [ ] 进行 Component 的详细划分

## 第三阶段：React Router

加入路由


