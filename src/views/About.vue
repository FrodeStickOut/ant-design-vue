<template>
  <div class="about">
    <a-layout>
      <a-layout-header class="about-header">vue-aisy 介绍</a-layout-header>
      <a-layout>
        <a-layout-sider class="about-sider">
          Im am a-layout-sider
        </a-layout-sider>
        <a-layout-content class="about-content">
          <h2>本项目前端ui框架使用ant-design-vue</h2>
          <h2>main.js是函数入口。ui框架在这里全局引入</h2>
          <h2>路由页面会渲染在app.vue中 router-view</h2>
          <h2>
            <a href="https://antdv.com/docs/vue/introduce-cn/"
              >ant-design-vue组件地址</a
            >
          </h2>
        </a-layout-content>
      </a-layout>
      <a-layout-footer class="about-footer">
        创建时间：2019-11-09
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style lang="less" scoped>
.about-header {
  background-color: aquamarine;
  text-align: center;
  vertical-align: auto;
  font-size: 30px;
  line-height: 64px;
}
.about-content {
  height: 500px;
}
.about-sider {
  background-color: bisque;
  font-size: 20px;
  text-align: center;
  vertical-align: auto;
  line-height: 500px;
}
.about-footer {
  background-color: #909399;
  height: 30px;
  text-align: right;
}
h2 {
  padding-left: 40px;
  padding-top: 40px;
}
</style>
