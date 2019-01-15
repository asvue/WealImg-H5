<template>
  <div class="j-container">
    <div class="j-content">
      <div class="m-gallery" v-infinite-scroll="loadMores" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
        <transition-group name="fade" tag="div">
          <div v-for="(photo,idx) in imgData" :key="idx" class="item"  @click='getPhotoDetail(idx)'>
            <img v-lazy="photo.imgsrc">
          </div>
        </transition-group>
      </div>
  
    </div>
  
  </div>
</template>

<script>
// Promise类型的ajax请求库
import axios from 'axios'
//引用公共文件查询url参数
import {getQueryString} from '../../assets/js/Lib'
import { API } from '../../assets/js/config.js'


export default {
  data() {
    return {
      imgData: [],
      list: 0,
      busy: false,//避免同一请求多次发送
      loading: null,

    }
  },
  mounted() {
   

  },
  activated(){
 let vm = this;
    // 查询url参数 城市regionCode
    this.list = getQueryString("list");
    this.loadMore().then(function () {
      this.loadMore()
    }.bind(this));
    
  },


  methods: {


    loadMores() {
      this.loading = true;
      this.loadMore();
      this.loading = false;
      // console.log('启动了')
      //       console.log(this.loading)

    },
    getPhotoDetail(idx) {
      this.$router.push({ name: 'photo_detail', params: { id: idx } });

      let photoData = { 'index': idx, 'imgData': this.imgData };
      localStorage.setItem("photoData", JSON.stringify(photoData));

    },

    loadMore: function () {

      this.loading = true;
      if (this.busy) {
        return;
      }
      var start = this.imgData.length;
      this.busy = true;

      return axios.post(`${API.host}/wealimg/${this.list == '0' ? this.list : this.list * 10}/10`, {

      })
        .then(function (response) {
          response.data.param.forEach(photo => {

            this.imgData.push(photo);
          })
          this.busy = false;
          this.list++;
          this.loading = false;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });


    }



  }
}
</script>

<style  rel="stylesheet/less" type="text/less" lang="less" scoped>

img[lazy=loading] {
    width: 80px;
    height: 80px;
}


.mint-header-title {
  font-size: 1rem;
}

.j-content {
  padding-top:50px;
  padding-bottom:52px;
}

.m-gallery {


  &>div {
    display: flex; //采用flex布局
    flex-wrap: wrap; //规定一行放不下flex元素时自动换行
  }

  & .item {
    height: 100px;
    flex-grow: 1; //每个flex元素占的宽度相同
    margin: 2px
  }

  & img {
    height: 100px; //   min-width: 100%;
    max-width: 100%;
    min-width: 100%;
    object-fit: cover; //使图片等比拉伸，可能会被裁减
    vertical-align: bottom;
  }
}




.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>