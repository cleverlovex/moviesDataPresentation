<template>
  <div id='main'>
    <img src="~assets/img/豆瓣.png" alt="">
    <span>2019高分动漫电影情感分析结果</span>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
  #main {
    height: 100px;
    border-bottom: 1px solid #dcdfe6;
    display: flex;
  }

  #main img {
    height: 100px;
    width: 200px;
  }

  #main span {
    display: flex;
    align-items: center;
    font-size: 28px;
  }

</style>
