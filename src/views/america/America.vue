<template>
  <div id="main">
    <toy/>
    <div class="line"></div>
    <xun-long/>
    <div class="line"></div>
    <lion/>
    <div class="line"></div>
    <ice/>
    <comment/>
  </div>
</template>

<script>
import Toy from './childComps/Toy'
import XunLong from './childComps/XunLong'
import Lion from './childComps/Lion'
import Ice from './childComps/Ice'
import Comment from './childComps/Comment'

export default {
  name: '',
  components: {
    Toy,
    XunLong,
    Lion,
    Ice,
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
