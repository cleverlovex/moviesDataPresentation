<template>
  <div id="main">
    <ul>
      <li><a href="">国内高分动漫电影</a></li>
      <li><a href="">日本高分动漫电影</a></li>
      <li><a href="">欧美高分动漫电影</a></li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "MainTabBar",
    components: {
  
    }
  }
</script>

<style scoped>
  #main ul li {
    width: 240px;
    height: 50px;
    list-style: none;
    line-height: 50px;
  }

  #main ul li a {
    text-decoration: none;
    color: #7f8c8d;
  }

  #main ul li a:active {
    color: #3498db;
  }
</style>
