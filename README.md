# 前端框架选型

## 2018/05/09

### 1.需求

* 需要考虑一次开发能够满足平板及电脑的应用,且满足IE6-IE11/chrome/safari/android平板下的常用浏览器,另外,还要给出做移动开发时的前端开发基数方案,类似于HBuild工具(一次开发,生成多平台代码)

### 2.需求细化

1. 一次开发满足pc/pad/mobile,平台兼容性:pc(ie6+)/各安卓版本/移动端浏览器厂商,关键在于IE兼容性/厂商修改版安卓浏览器/响应式
2. hBuild自动生成多平台方案(webapp)的实质是响应式web页面内嵌入移动平台,前端页面响应式即可成功显示

* 框架要求:响应式+IE6

### 3.框架备选

1. jquery 1.9(IE6+) + bootstrap V3 (IE8+)
2. jquery 1.9(IE6+) + easyUI 1.3.2 (不支持响应式,pc和移动端是两套模版)
3. jquery 1.9(IE+6) + 自行编写UI组件库
<!-- 3. [野生框架](http://qierukou.com/document/javascript.html) -->

### 4.框架优劣分析

* jquery 1.9(IE6+) + bootstrap V3 (IE8+)

1. bootstrap v2 + BSIE 可以支持IE6+,但是响应式支持度较低,组件较少
2. bootstrap v3 在移动端以及ie8+显示较好,ie7布局正常部分细节需要适配,ie6下基本无效
3. 采用B3+JQ1.9框架,ie6-hack单独写css文件,html条件注释引用

* jquery 1.9(IE6+) + easyUI (不支持响应式,pc和移动端是两套模版)
1. easyUI 1.3.2支持ie6+
2. PC和移动端[用法不同](http://www.jeasyui.com/demo/main/index.php),意味着需要两套代码,且移动端easyUI功能被砍一半
3. 在一套代码的条件下,以PC版easyUI作为基本架构,单独给pad/mobile进行媒体查询写css

* jquery 1.9(IE+6) + 自行编写UI组件库

### 5.结论