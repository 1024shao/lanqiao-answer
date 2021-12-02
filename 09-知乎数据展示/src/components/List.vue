<template>
  <div class="list">
    <div class="list-item" v-for="item in dataList" :key="item.id">
      <img class="list-pic" :src="item.imgUrl" />

      <div class="list-info">
        <p class="title">{{ item.title }}</p>

        <p class="desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      dataList: [],
    }
  },

  created() {
    this.loadListData()
  },

  methods: {
    loadListData: function() {
      axios.get('static/data/list.json').then((res) => {
        if (res.data.status === 'success') {
          this.dataList = res.data.data.listInfo
        }
      })
    },
  },
}
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
