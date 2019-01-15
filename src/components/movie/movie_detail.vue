<template>
  <div id='movieDetail' v-cloak>
    <!-- 顶部头 -->
    <div>
      <mt-header :title='movieDetail.title'>
        <router-link :to="{ name: 'movie',params: { page:'电影' }}" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="detailMain">
      <div class='detailBorder'>

        <!-- 封面 -->
        <div class="img-cover">
          <img :src="movieDetail.images ? movieDetail.images.large : ''" alt="">
        </div>


        <!-- 电影基本信息 -->
        <div style='padding:20px 0;'>

          <div style="font-size:24px;padding:5px 0;">
            {{movieDetail.title}}
          </div>

          <div class='movie-hint'>

            <div class='movie-alias'>
              <span>别名:</span>
              <ul style='list-style-type:none;'>
                <li v-for="(movie,idex) in movieDetail.aka" :key='idex'>{{movie}}</li>
              </ul>
            </div>

            <p>{{movieDetail.countries ? movieDetail.countries[0] : ''}}
              <span v-for="genre in movieDetail.genres" :key='genre'>{{genre}}</span>
            </p>

            <p>年份：{{movieDetail.year}}</p>
          </div>

        </div>

        <!-- 评分 -->
        <div style='padding:20px 0;'>
          <el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}">
          </el-rate>
        </div>

        <!-- 电影内容简介 -->
        <div class="movie-intro">
          {{movieDetail.summary}}
        </div>

        <hr class="movie-item-dividers">

        <p class="movie-font-increase">导演：{{movieDetail.directors ? movieDetail.directors[0].name : ''}}</p>
       
        <img class='portrait' :src="movieDetail.directors ? movieDetail.directors[0].avatars.medium : ''" alt="">
        
        <p class="movie-font-increase">主演</p>
        
        <!-- 主演人群 -->
        <div class="movie-alias">
          <div v-for="(casts,idex) in movieDetail.casts" :key='idex'>
            <span class='movie-font-common'>{{casts.name}}</span>
            <img class='portrait' :src="casts.avatars.large" alt="">
          </div>
        </div>

      </div>
    </div>

    <!-- 加载圈 -->
    <mt-spinner v-show='loading' type="snake" :size='50' color="#2196f3"></mt-spinner>
  </div>
</template>

<script>
// Promise类型的ajax请求库
import axios from 'axios'
import { API } from '../../assets/js/config.js'


export default {

  data() {
    return {
      movieId: this.$route.params.id,
      movieDetail: {},
      loading: true,
      value5: 0,

    }
  },
  mounted() {
    let vm = this;
    axios.get(`${API.host}/movie/subject/${vm.movieId}`, {

    })
      .then(function(response) {
        vm.movieDetail = response.data;
        vm.value5 = (response.data.rating.average) / 2;
        vm.loading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  },





  methods: {


  },
}
</script>



<style  rel="stylesheet/less" type="text/less" lang="less" scoped>
.mint-spinner-snake {
  margin: 20px auto!important;
}
.mint-header {
  height: 70px;
  font-size: 19px;
}

.detailMain {
  padding: 10px 40px;
  width: 100%;
  text-align: center;
}

.detailBorder {
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
}

.detailMain span {
  width: 50px;
  display: inline-block;
}

.movie-item-dividers {
  // position: absolute;
  // bottom: 0;
  // right: 0;
  // left: 72px;
  height: 2px;
  margin: 0;
  padding: 0;
  display: block;
  border: 0;
  background-color: rgba(0, 0, 0, .12);
}

.img-cover>img {
  width: 100%;
}

.portrait {
  width: 40px;
  height: 45px;
  border-radius: 50%;
  margin-bottom: 24px;
}


.movie-alias {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-hint {
  font-size: 14px;
  opacity: .54;
  &>p {
    margin: 0;
    padding: 0;
  }
}

.movie-intro {
  padding: 16px;
  font-size: 14px;
  line-height: 22px;
  color: #2c3e50;
  padding-bottom: 24px;
}


.movie-font-common {
  font-size: 14px;
  line-height: 22px;

  color: #2c3e50;
  opacity: .54;
}

.movie-font-increase {
  font-size: 19px;
  line-height: 22px;
  color: #2c3e50;
  opacity: .54;
}
</style>