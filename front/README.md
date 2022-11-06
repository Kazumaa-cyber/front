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

- [ ] header 的 border 没有撑开
- [ ] header 没有吸顶
  - 方案1: `position: sticky`
  - 方案2: `position: fixed + margin-top`
- [ ] 背景点点没出来
- [ ] footer 宽度没撑满
- [ ] footer 跟上面内容的间距有时候不足
- [ ] link 之间的点可以使用 `:before` 更优雅的实现

# 学习

- [x] flex 布局
- [ ] css 选择器
  - [https://blog.csdn.net/weixin_44691608/article/details/106603985](https://blog.csdn.net/weixin_44691608/article/details/106603985)
  - [ ] 掌握基础的伪选择器 `:hover, :active`
- [ ] css 权重
  - [https://blog.csdn.net/weixin_44691608/article/details/106649186](https://blog.csdn.net/weixin_44691608/article/details/106649186) 

# 下一步

之后要做的可以先看也可以先不看

- 学习
  - [ ] 使用 JS 创建与操作 dom 元素
- 修改
  - [ ] 使用 for 循环生成列表项
