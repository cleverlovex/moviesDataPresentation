<template>
  <div id="main">
    <ne-zha/>
    <div class="line"></div>
    <luo-xiao-hei/>
  </div>
</template>

<script>
import NeZha from './childComps/NeZha'
import LuoXiaoHei from './childComps/LuoXiaoHei'

export default {
  name: '',
  components: {
    NeZha,
    LuoXiaoHei
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
