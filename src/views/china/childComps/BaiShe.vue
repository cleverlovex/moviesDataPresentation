<template>
  <div class="item">
      <div class="title">
        <p>白蛇：缘起<span>（2019）</span></p>
        <p class="score">豆瓣评分：<span>7.9</span></p>
      </div>
      <div class="content">
        <img src="~assets/img/白蛇/白蛇.jpg" alt="">
        <div class="right">
          <div class="context">
            <p>导演：<a href="">黄家康 / 赵霁</a></p>
            <p>编剧：<a href="">大毛</a></p>
            <p>主演：<a href=""> 张喆 / 杨天翔 / 唐小喜 / 刘紫玲 / 张遥函 /</a>更多...</p>
            <p>类型：<span> 爱情 / 动画 / 奇幻 </span></p>
            <p>制片国家/地区：<span>中国大陆 / 美国</span></p>
            <p>语言：<span>汉语普通话</span></p>
            <p>上演日期：<span>2019-01-11(中国大陆)</span></p>
            <p>片长：<span>99分钟</span></p>
            <p>又名：<span>White Snake</span></p>
            <p>IMDb链接：<a href="">tt9288776</a></p>
          </div>
        </div>
      </div>
      <div class="emotion">
        <p>20个评论高频情感词</p>
        <img src="~assets/img/白蛇/白蛇_20keywords.jpg" alt="">

        <p>词云图</p>
        <img class="wave" src="~assets/img/白蛇/白蛇_词云.jpg" alt="">
      </div>
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
  .title p {
    font-size: 26px;
    font-weight: 700;
    margin: 25px 0 10px;
  }

  .title .score {
    font-size: 16px;
    margin: 0;
    padding: 0 0 8px;
  }

  .title .score span {
    color: #f39c12;
  }

  .title p span {
    color: #95a5a6;
  }

  .content {
    display: flex;
    margin-bottom: 50px;
  }

  .content img {
    width: 135px;
    height: 199.5px;
  }

  .content .right {
    margin-left: 10px;
  }

  .content .right .context {
    display: block;
    font-size: 13px;
  }

  .content .right .context p {
    margin: 0;
    padding-bottom: 8px;
    color: #666666;
  }

  .content .right .context p a {
    color: #3498db;
  }

  .content .right .context p span {
    color: #111111;
  }

  .emotion p {
    width: 100%;
    font-size: 26px;
    font-weight: 700;
    margin: 25px 0 10px;
    padding: 0 0 5px;
    border-bottom: 1px solid #dcdfe6;
  }

  .emotion img {
    width: 800px;
  }

  .emotion .wave {
    margin-top: 0;
  }
</style>
