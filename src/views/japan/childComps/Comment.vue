<template>
  <div id="main">
    <div class="line"></div>
    <div>
      <h1>点评：</h1>
      <p>  2019年日本的热门动漫不多，从评论来看，新海诚的新作《天气之子》当属本年最火动漫电影，唯美的画面，令人深思的剧情，让人难以忘怀。在日本，票房更是打破了日本的票房记录。《你的名字》大火，让这位导演更是备受关注，词云图的数据显示，新海诚毫无悬念地最受瞩目，并且遥遥领先，只是这评分相比神作《你的名字》的确逊色了不少。另一部漫画剧场版也同样受到各大海米的关注，评分7.7，这表现着实不错。</p>
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
  .line {
    border-bottom: 1px solid #dcdfe6;
  }

  p {
    font-size: 18px;
    text-indent: 2em;
    text-transform: capitalize;
  }

  p::first-letter {
    color: #f1c40f;
    font-size: 28px;
    font-weight: 700;
  }
</style>
