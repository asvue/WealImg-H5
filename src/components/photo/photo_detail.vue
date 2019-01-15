<template>
  <div class="photo-detail">
    <div>
      <mt-header title="You，党之栋梁、国之人才">
        <router-link :to="{ name: 'photo',params: { page:'图片' }}" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <v-touch class="photo-detail-img" v-bind:swipe-options="{ direction:'horizontal'}" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <img :src="imgsrc" alt="总是在不经意里留下足迹" ref='imgs'>
    </v-touch>
  
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      img: {},
      index: '',
      imgsrc: '',
      padding: ''
    }
  },
  mounted() {
    this.img = JSON.parse(localStorage.getItem("photoData")).imgData;
    this.index = this.$route.params.id;
    this.imgsrc = this.img[this.index].imgsrc;
  },

  methods: {

    onSwipeLeft() {
      if (this.index === this.img.length - 1) {
        let instance = Toast('这是最后一张图');
        setTimeout(() => {
          instance.close();
        }, 2000);
        return;
      }
      this.index++;
    },
    onSwipeRight() {
      if (this.index === 0) {
        let instance = Toast('这是第一张图');
        setTimeout(() => {
          instance.close();
        }, 2000);
        return;
      }
      this.index--;
    },

  },
  watch: {
    index: function (val, oldVal) {
      this.imgsrc = this.img[this.index].imgsrc;
    },
  }
}
</script>

<style  rel="stylesheet/less" type="text/less" lang="less" scoped>
.photo-detail-img {
  display: flex; // align-items: center;
  height: 91vh;
  justify-content: center;
  overflow-y: auto;
}

.photo-detail-img img {
  box-sizing: border-box;
  display: block; // max-width: 100%; // height: 100%;
  // min-width: 70%;
  max-width: 100%;
  max-height: 100%; // max-height: 100%
  object-fit: scale-down;
}
</style>