<template>
  <div id="main">
    <div class="line"></div>
    <div>
      <h1>点评：</h1>
      <p>  2019年国漫的势头非常强势，特别是哪吒之魔童降世，更是拿下了超过50亿的票房。罗小黑战记的剧情也大受观众称道，萌萌的主角更是收割一众粉丝。从词云图中可以看到，"动画"、"剧情"、"故事"、还有主角名字等都是高频的评论词，从中可以看出国漫今年无论是剧本还是画面等的提升，还有角色给观众留下的深刻印象。</p>
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
