<template>
  <div id="main">
    <hai-zei/>
    <div class="line"></div>
    <weather/>
    <comment/>
  </div>
</template>

<script>
import HaiZei from './childComps/HaiZei'
import Weather from './childComps/Weather'
import Comment from './childComps/Comment'

export default {
  name: '',
  components: {
    HaiZei,
    Weather,
    Comment
  }
};
</script>

<style scoped>
  #main {
    margin-left: 20px;
  }

  .line {
    border-bottom: 1px solid #dcdfe6;
  }
  
</style>
