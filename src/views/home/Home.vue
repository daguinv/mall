<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>

<style lang="less">
// 引入全局less
@import '~assets/css/index.less';
.home-nav {
  background: @backgroundColor;
  color: @color;
}
</style>>
