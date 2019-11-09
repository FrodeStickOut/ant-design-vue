<template>
  <div id="app">
    <div class="aisy-title">欢迎来到&nbsp;aisy&nbsp;学习成长小组</div>
    <div id="nav">
      <router-link to="/"><a-button type="link">Home</a-button></router-link> |
      <router-link to="/about"
        ><a-button type="link">请点击这里了解vue-aisy</a-button></router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
.aisy-title {
  text-align: center;
  font-size: 40px;
  color: forestgreen;
}
</style>
