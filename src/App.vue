<template>
  <div id='base'>
    <top-nav class="top"/>
    <div class="main">
      <div class="left">
      <ul>
        <li><router-link class="box1" to="/china">国内高分动漫电影</router-link></li>
        <li><router-link class="box1" to="/japan">日本高分动漫电影</router-link></li>
        <li><router-link class="box1" to="/america">美国高分动漫电影</router-link></li>
      </ul>  
      </div>
      <div class="right">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "components/content/topNav/TopNav";

export default {
  name: 'App',
  components: {
    TopNav,
  }
}
</script>

<style>
  @import "assets/css/normalize.css";

  #base {
    margin: 0 150px;
  }

  .top {
    width: 80%;
    position: fixed;
    top: 0;
    z-index: 9;
    background-color: #fff;
  }

  .left ul li {
    width: 150px;
    height: 50px;
    list-style: none;
    line-height: 50px;
  }

  .router-link-active {
    color: #3498db;
}
  
  .main {
    display: flex;
    margin-top: 100px;
  }

  .left {
    display: flex;
    position: fixed;
    top: 100px;
    left: 150px;
  }

  .right {
    display: flex;
    margin: 0 150px 0 200px;
  }
</style>
