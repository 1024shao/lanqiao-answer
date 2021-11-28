<template>
  <div class="main">
    <div class="home">
      <div class="home-left">
        <List />
      </div>
      <div class="home-right">
        <Recommend />
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Recommend from "@/components/Recommend.vue";

export default {
  name: "home",
  components: { List, Recommend }
};
</script>

<style scoped>
.main {
  background-color: #f6f6f6;
}
.home {
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
}
.home-left {
  float: left;
  width: 625px;
  background: #fff;
  padding: 15px;
}
.pic {
  width: 625px;
  height: 270px;
  border-radius: 8px;
}
.home-right {
  background: #fff;
  float: right;
  width: 280px;
  padding: 15px;
}
</style>

