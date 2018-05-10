<template>
    <div>
        <p>响应式</p>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        </Row>
        <p>顶部对齐</p>
        <Row type="flex" justify="center" align="top" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <p>底部对齐</p>
        <Row type="flex" justify="center" align="bottom" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <p>居中对齐</p>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
    </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.code-row-bg > div {
  height: auto;
  line-height: 30px;
}
.ivu-col {
  text-align: center;
  line-height: 50px;
  height: 50px;
  color: #fff;
  background-color: rgba(0, 153, 229, 0.9);
  border: 1px solid #fff;
}
</style>
