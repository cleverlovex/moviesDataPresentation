<template>
  <div id="main">
    <div class="line"></div>
    <div>
      <h1>点评：</h1>
      <p>  2019年欧美的动漫电影着实不少，很多电影的评分更是超过了9分，但是关注程度不高，在热门的电影里面评分不俗当属以上四部，其中玩具总动员4更是拿下了8.6分的高分。驯龙高手3、狮子王、冰雪奇缘2等也拿到了7.4分及以上的不错分数。其中狮子王的动画以及冰雪奇缘的主角更是成为观众讨论最多的话题。</p>
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
