<template>
  <div class="recommend">
    <div class="Card GlobalSideBar-category">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        data-za-detail-view-id="8228"
        class="css-520aav"
      >
        <img src="static/images/t5.jpg" width="100%" alt />
      </a>
      <ul class="GlobalSideBar-categoryList">
        <li class="GlobalSideBar-categoryItem">
          <a
            href="#"
            target="_blank"
            title="Live"
            data-za-not-track-link="true"
            type="button"
            class="Button Button--plain"
            style="color: rgb(255, 207, 0);"
          >
            <img src="static/images/live.png" class="GlobalSideBar-categoryIcon" />

            <span class="GlobalSideBar-categoryLabel">Live</span>
          </a>
        </li>
        <li class="GlobalSideBar-categoryItem">
          <a
            href="#"
            target="_blank"
            title="书店"
            data-za-not-track-link="true"
            type="button"
            class="Button Button--plain"
            style="color: rgb(67, 212, 128);"
          >
            <img src="static/images/book.png" class="GlobalSideBar-categoryIcon" />

            <span class="GlobalSideBar-categoryLabel">书店</span>
          </a>
        </li>
        <li class="GlobalSideBar-categoryItem">
          <a
            href="#"
            target="_blank"
            title="圆桌"
            data-za-not-track-link="true"
            type="button"
            class="Button Button--plain"
            style="color: rgb(0, 132, 255);"
          >
            <img src="static/images/dist.png" class="GlobalSideBar-categoryIcon" />

            <span class="GlobalSideBar-categoryLabel">圆桌</span>
          </a>
        </li>
        <li class="GlobalSideBar-categoryItem">
          <a
            href="#"
            target="_blank"
            title="专栏"
            data-za-not-track-link="true"
            type="button"
            class="Button Button--plain"
            style="color: rgb(15, 136, 235);"
          >
            <img src="static/images/pencil.png" class="GlobalSideBar-categoryIcon" />

            <span class="GlobalSideBar-categoryLabel">专栏</span>
          </a>
        </li>
        <li class="GlobalSideBar-categoryItem">
          <a
            href="#"
            target="_blank"
            title="付费咨询"
            data-za-not-track-link="true"
            type="button"
            class="Button Button--plain"
            style="color: rgb(84, 120, 240);"
          >
            <img src="static/images/chat.png" class="GlobalSideBar-categoryIcon" />

            <span class="GlobalSideBar-categoryLabel">付费咨询</span>
          </a>
        </li>
        <li class="GlobalSideBar-categoryItem">
          <a
            href="#"
            target="_blank"
            title="百科"
            data-za-not-track-link="true"
            type="button"
            class="Button Button--plain"
            style="color: rgb(88, 104, 209);"
          >
            <img src="static/images/wiki.png" class="GlobalSideBar-categoryIcon" />

            <span class="GlobalSideBar-categoryLabel">百科</span>
          </a>
        </li>
      </ul>
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
.GlobalSideBar-category,
.GlobalSideBar-categoryList {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.GlobalSideBar-category {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.Card {
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.GlobalSideBar-categoryList {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 20px 0 -5px;
  padding: 0 10px;
}
.GlobalSideBar-categoryItem {
  width: 33%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 25px;
}
.GlobalSideBar-categoryItem .Button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  color: currentColor;
}
</style>
