<template>
  <div id='movie'>
    <mt-navbar v-model="selecteds">
      <mt-tab-item id="1">Top250</mt-tab-item>
      <mt-tab-item id="2">正在热映</mt-tab-item>
      <mt-tab-item id="3">即将上映</mt-tab-item>

    </mt-navbar>

    <mt-tab-container v-model="selecteds">
      <!-- top250 -->
      <mt-tab-container-item id="1">
        <movieListTop250 :id='selecteds'></movieListTop250>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <movielistHot :id='selecteds'></movielistHot>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <movielistComing :id='selecteds'></movielistComing>
      </mt-tab-container-item>

    </mt-tab-container>

    <div @click="clickTop()" style='background:#2196f3;box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);border-radius:50%;width:40px;height:40px;position:fixed;bottom:60px;right:10px;display:flex;align-items:center;'>
      <svg class="icon" style="width: inherit;color:#fff;font-size: 23px;" aria-hidden="true">
        <use xlink:href="#icon-xiangshangjiantouarrowup"></use>
      </svg>
    </div>

  </div>
</template>

<script>
import '../../assets/js/iconfont.js'
import movieListTop250 from './movieTop250'
import movielistHot from './movieHot'
import movielistComing from './movieComing'

export default {
  data() {
    return {
      selecteds: '',
    }
  },
  mounted() {
    let vm = this;
    if (this.selecteds == '') {
      this.selecteds = '1';
    }




  },


  methods: {
    //返回顶部
    clickTop() {

      let timer = null;
      cancelAnimationFrame(timer);
      //获取当前毫秒数
      let startTime = +new Date();
      //获取当前页面的滚动高度
      let b = document.body.scrollTop || document.documentElement.scrollTop;
      let d = 500;
      let c = b;
      timer = requestAnimationFrame(function func() {
        let t = d - Math.max(0, startTime - (+new Date()) + d);
        document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
        timer = requestAnimationFrame(func);
        if (t == d) {
          cancelAnimationFrame(timer);
        }
      })

    },



  },
components:{
  movieListTop250,
  movielistHot,
  movielistComing,
}

}
</script>

<style  rel="stylesheet/less" type="text/less" lang="less" >

@keyframes rotating{
from{transform-origin: center center;transform:rotate(0);}
to{transform-origin: center center;transform:rotate(360deg);}
}

img[lazy=loading] {
    width: 100%;
    height: 100%;
    display: block;
    border-style:none;
  background-size: cover;
  background-image: url('../../assets/img/加载.png');
    animation:rotating 1.5s linear infinite;
}

.mint-tab-container-wrap {
  height: 100%;
}


#movie {
  height: 100%;
  padding-top: 50px;
  padding-bottom: 52px;
}

.movie-item-divider {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 72px;
  height: 1px;
  margin: 0;
  padding: 0;
  display: block;
  border: 0;
  background-color: rgba(0, 0, 0, .12);
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}


.movie-item {
  min-height: 88px;
  width: 100%;
  margin: 0;
  padding: 0 16px;
  position: relative;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  text-transform: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  background: none;
  border: 0;
  transition: all .4s cubic-bezier(.25, .8, .25, 1);
  line-height: 36px;
  white-space: nowrap;
  text-align: left;
  & .movie-poster {
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    margin: auto;
    display: inline-block;
    overflow: hidden;
    user-select: none;
    border-radius: 40px;
    vertical-align: middle;
    margin: 0;
    margin-right: 16px;
    & img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  & .movie-item-content {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
  & .movie-text {
    flex: 1 1 auto;
    display: -ms-flexbox;
    display: flex;
    flex-flow: column;
    flex: 1;
    overflow: hidden;
    line-height: 1.25em;
    text-overflow: ellipsis;
    white-space: normal;
    & p {
      margin: 0;
    }
  }
}
</style>