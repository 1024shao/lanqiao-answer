<template>
  <div class="header">
    <router-link to="/" class="logo"></router-link>
    <div class="nav">
      <div class="nav-item left active">首页</div>
      <div class="nav-item left">发现</div>
      <div class="nav-item left">等你来答</div>

      <div class="search">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.header {
  position: relative;
  height: 56px;
  border: 1px solid #efefef;
}
.logo {
  position: absolute;
  top: 0;
  left: 30px;
  width: 100px;
  height: 56px;
  background: url("/static/images/logo.png");
  background-size: contain;
}
.nav {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 9%;
}
.nav-item {
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
}
.left {
  float: left;
}
.right {
  float: right;
  color: #969696;
}
.active {
  font-weight: bold;
  border-bottom: 1px solid #0084ff;
}
.search {
  position: relative;
  float: right;
}
.search input {
  width: 200px;
  height: 38px;
  margin-top: 9px;
  outline: 0;
  border: 0;
  border-radius: 3px;
  padding: 0 30px 0 20px;
  font-size: 14px;
  background: #eee;
  box-sizing: border-box;
  color: #666;
}
.zoom {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
}

.addition {
  position: absolute;
  top: 0;
  right: 30px;
  height: 56px;
}

.addition button {
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  margin-right: 20px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  background-color: #fff;
}
.addition .reg {
  color: #ec6149;
}
.addition .writing {
  background: #ec6149;
  color: #fff;
}
</style>
