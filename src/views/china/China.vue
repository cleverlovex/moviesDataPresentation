<template>
  <div id="main">
    <ne-zha/>
    <div class="line"></div>
    <luo-xiao-hei/>
    <div class="line"></div>
    <bai-she/>
    <comment/>
  </div>
</template>

<script>
import NeZha from './childComps/NeZha'
import LuoXiaoHei from './childComps/LuoXiaoHei'
import BaiShe from './childComps/BaiShe'
import Comment from './childComps/Comment'

export default {
  name: '',
  components: {
    NeZha,
    LuoXiaoHei,
    BaiShe,
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
