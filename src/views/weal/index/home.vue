<template>
  <div id="home">
    <div>
      <mt-header fixed :title="selected">
        <mt-button slot="right">{{city}}</mt-button>
      </mt-header>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="bottom">
      <mt-tabbar fixed v-model="selected">
        <mt-tab-item id="电影">
          <img slot="icon" src="../../../assets/img/电影.svg"> 电影
        </mt-tab-item>
        <mt-tab-item id="音乐">
          <img slot="icon" src="../../../assets/img/音乐.svg"> 音乐
        </mt-tab-item>
        <mt-tab-item id="图书">
          <img slot="icon" src="../../../assets/img/图书.svg"> 图书
        </mt-tab-item>
        <mt-tab-item id="图片">
          <img slot="icon" src="../../../assets/img/图片.svg"> 图片
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      selected: '',
      city: '',
    }
  },
  mounted() {
    this.city = remote_ip_info["city"];
    if (this.$route.params.page == undefined) {
      this.selected = '电影'

    } else {
      this.selected = this.$route.params.page;
    }
    this.clickTab(this.selected);

  },

  methods: {

    clickTab: function(selected) {

      switch (selected) {
        case '电影':
          this.$router.push({ name: 'movie' });
          break;
        case '图书':
          Toast('大胸弟,别急,我还没写');
          break;
        case '音乐':
          this.$router.push({ name: 'music' });
          break;
        case '图片':
          this.$router.push({ name: 'photo' });
          break;
      }

    },
  },
  watch: {
    selected: function(val, oldVal) {
      this.clickTab(val);
    },
  },

}
</script>

<style  rel="stylesheet/less" type="text/less" lang="less">
.mint-spinner-snake {
  margin: 20px auto!important;
}

.mint-header-title {
  font-size: 18px;
  font-weight: 500;
  flex: 2;
}

.mint-header {
  height: 50px;
  background-color: #2196f3;
}


.bottom {
  background-color: #2196f3;
  & .mint-tabbar {
    background-color: #2196f3;
    height: 52px;
    color: rgba(255, 255, 255, .54);
  }
  & .mint-tab-item-label {
    font-weight: 600;
  }
  & .mint-tab-item-icon img {
    opacity: 0.5;
  }
}



.mint-tabbar>.mint-tab-item.is-selected {
  background-color: #2196f3;
  min-width: 96px;
  max-width: 168px;
  flex: 1 1 72px;
  padding-top: 8px;
  &>.mint-tab-item-label {
    font-weight: 900;
    color: rgba(255, 255, 255, .87);
  }
  & img {
    opacity: 1;
  }
}

.mint-tab-item {
  transition-property: color, flex, min-width, max-width, -ms-flex, font-weight, padding-top;
  transition: 400ms cubic-bezier(0.25, 0.8, 0.25, 1) 5.90894ms;
}
</style>