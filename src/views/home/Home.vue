<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- <home-swiper></home-swiper> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import HomeSwiper from "./components/HomeSwiper";
import {getHomeMultidata} from "api/home/home"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data(){
    return {
      banner:[],
    }
  },
  created(){
    this.getMultidata();
  },
  methods:{
    getMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        console.log(this.banner);
        
      })
    }
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
