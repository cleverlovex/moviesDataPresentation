<template>
  <div class="item">
      <div class="title">
        <p>航海王：狂热行动 ONE PIECE STAMPEDE<span>（2019）</span></p>
        <p class="score">豆瓣评分：<span>7.7</span></p>
      </div>
      <div class="content">
        <img src="~assets/img/海贼王/海贼王.jpg" alt="">
        <div class="right">
          <div class="context">
            <p>导演：<a href="">大塚隆史</a></p>
            <p>编剧：<a href="">尾田荣一郎 / 大塚隆史 / 富冈淳广</a></p>
            <p>主演：<a href=""> 田中真弓 / 冈村明美 / 中井和哉 / 山口胜平 / 平田广明 /</a>更多...</p>
            <p>类型：<span>  动画 / 冒险 </span></p>
            <p>官方网站:<a href="">www.onepiece-movie.jp</a></p>
            <p>制片国家/地区：<span>日本</span></p>
            <p>语言：<span>日语</span></p>
            <p>上演日期：<span>2019-10-18(中国大陆) / 2019-08-09(日本)</span></p>
            <p>片长：<span>101分钟</span></p>
            <p>又名：<span>航海王：夺宝争霸战(台) / 海贼王：狂热行动</span></p>
            <p>IMDb链接：<a href="">tt9430698</a></p>
          </div>
        </div>
      </div>
      <div class="emotion">
        <p>20个评论高频情感词</p>
        <img src="~assets/img/海贼王/海贼王_20keywords.jpg" alt="">

        <p>词云图</p>
        <img class="wave" src="~assets/img/海贼王/海贼王_词云.jpg" alt="">
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
