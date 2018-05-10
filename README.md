# 前端框架选型

## 2018/05/09

### 1.需求

* 需要考虑一次开发能够满足平板及电脑的应用,<del>且满足IE6-IE11/chrome/safari/android平板下的常用浏览器(很开心,不用支持IE6了)</del>可更换谷歌浏览器,
* 另外,还要给出做移动开发时的前端开发基数方案,类似于HBuild工具(一次开发,生成多平台代码)

### 2.需求细化

1. 一次开发满足pc/pad/mobile,平台兼容性:pc<del>(ie6+)</del>/各安卓版本/移动端浏览器厂商,关键在于IE兼容性/厂商修改版安卓浏览器/响应式
2. hBuild自动生成多平台方案(webapp)的实质是响应式web页面内嵌入移动平台,前端页面响应式即可成功显示

* 框架要求:响应式+多平台

### 3.JS框架和类库备选

1. jQuery:经典的轻量级类库,跨浏览器兼容IE6+,丰富的DOM选择器,链式表达式,ajax,插件扩展性好.

2. vue.js/react.js:数据双向绑定,数据与UI表现层分离,组件化复用性高,

### 3.js框架:vue2.js

* 选取理由:
1. 轻量级(压缩后20kb),渐进式(学习曲线平缓)
2. 开发者为国人,文档支持较好
3. 社区活跃,库和插件丰富

### 4.组件库备选

* [Element](http://element-cn.eleme.io/#/zh-CN)

1. basic:grid layout color font button icon
2. form:radio checkbox input inputNumber(计数器) select cascader(级联选择器) switch slider timePicker datePicker dateTimePicker upload rate colorPicker transfer(穿梭框) form(表单)
3. data:table tag progress tree pagination badge(徽标)
4. notice:alert loading message messageBox notification
5. navigation:navMenu tabs breadcrumb dropdown steps
6. others:dialog tooltip(文字提示) popover(气泡提示,带标题) card carousel collapse

* [iView](https://www.iviewui.com/)
1. +autoComplete +avatar(头像) +timeline +loadingBar(加载进度条) +affix(图钉) +backTop +spin scroll(滚动加载)

### 5.iView实践
