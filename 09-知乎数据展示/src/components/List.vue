<template>
  <div class="list">
    <div
      class="list-item"
    >
      <img
        class='list-pic'
   src='/static/images/t1.jpg'
      />
      <div class="list-info">
        <p class='title'>你有什么道理幸好你早就知道的？</p>
        <p class='desc'>镜像问题：你有什么道理后悔没有早点知道？ 关联问题：你有什么因严重贪图短期利益而损失巨大的事？</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.list-item {
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
}
.list-pic {
  float: right;
  width: 125px;
  height: 100px;
  display: block;
  border-radius: 4px;
}
.list-info {
  width: 500px;
  float: left;
}
.title {
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.desc {
  line-height: 22px;
  font-size: 13px;
  color: #999;
}
</style>
