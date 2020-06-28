<template>
  <div class="item">
      <div class="title">
        <p>哪吒之魔童降世<span>（2019）</span></p>
        <p class="score">豆瓣评分：<span>8.5</span></p>
      </div>
      <div class="content">
        <img src="~assets/img/哪吒之魔童降世/哪吒.jpg" alt="">
        <div class="right">
          <div class="context">
            <p>导演：<a href="">饺子</a></p>
            <p>编剧：<a href="">饺子 / 易巧 / 魏芸芸</a></p>
            <p>主演：<a href="">吕艳婷 / 囧森瑟夫 / 瀚墨 / 陈浩 / 绿绮 /</a> 更多...</p>
            <p>类型：<span> 剧情 / 喜剧 / 动画 / 奇幻 </span></p>
            <p>制片国家/地区：<span>中国大陆</span></p>
            <p>语言：<span>汉语普通话</span></p>
            <p>上演日期：<span>2019-07-26(中国大陆) / 2019-07-13(大规模点映)</span></p>
            <p>片长：<span>110分钟</span></p>
            <p>又名：<span>哪吒降世 / Ne Zha / Nezha：Birth of the Demon Child</span></p>
            <p>IMDb链接：<a href="">tt10627720</a></p>
          </div>
        </div>
      </div>
      <div class="emotion">
        <p>20个评论高频情感词</p>
        <img src="~assets/img/哪吒之魔童降世/哪吒_20keywords.jpg" alt="">

        <p>词云图</p>
        <img class="wave" src="~assets/img/哪吒之魔童降世/哪吒_词云.jpg" alt="">
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
