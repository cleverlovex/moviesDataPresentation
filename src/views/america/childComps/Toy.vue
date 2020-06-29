<template>
  <div class="item">
      <div class="title">
        <p>玩具总动员4 Toy Story 4<span>（2019）</span></p>
        <p class="score">豆瓣评分：<span>8.6</span></p>
      </div>
      <div class="content">
        <img src="~assets/img/玩具总动员/玩具总动员.jpg" alt="">
        <div class="right">
          <div class="context">
            <p>导演：<a href="">乔什·库雷</a></p>
            <p>编剧：<a href="">约翰·拉塞特 / 安德鲁·斯坦顿 / 彼特·道格特 / 李·昂克里奇 / 威尔·麦克马克 / 史黛芬妮·福尔松 / C·S·安德森</a></p>
            <p>主演：<a href=""> 汤姆·汉克斯 / 蒂姆·艾伦 / 安妮·波茨 / 托尼·海尔 / 科甘-迈克尔·凯 /</a>更多...</p>
            <p>类型：<span> 喜剧 / 动画 / 奇幻 </span></p>
            <p>制片国家/地区：<span>美国</span></p>
            <p>语言：<span>英语</span></p>
            <p>上演日期：<span>2019-06-21(美国/中国大陆)</span></p>
            <p>片长：<span>100分钟</span></p>
            <p>又名：<span>反斗奇兵4(港)</span></p>
            <p>IMDb链接：<a href="">tt10734928</a></p>
          </div>
        </div>
      </div>
      <div class="emotion">
        <p>20个评论高频情感词</p>
        <img src="~assets/img/玩具总动员/玩具总动员_20keywords.jpg" alt="">

        <p>词云图</p>
        <img class="wave" src="~assets/img/玩具总动员/玩具总动员_词云.jpg" alt="">
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
