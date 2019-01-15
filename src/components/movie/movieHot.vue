<template>
  <div id='movielistHot' v-infinite-scroll="loadMores" infinite-scroll-disabled="loading" infinite-scroll-distance="10">

    <div v-for='(movie,idx) in movieHotData' :key='idx' @click="getMovieDetail(movie.id)">
      <div class='movie-item'>

        <div class='movie-item-content'>
          <div class="movie-poster">
            <img v-lazy="movie.images.large" alt="">

          </div>

          <div class="movie-text">
            <span>{{movie.title}}</span>
            <p style='font-size:14px;color: rgba(0,0,0,.54);'>
              <span v-for="genre in movie.genres" :key='genre'>{{genre}}</span>({{movie.year}})(平均{{movie.rating.average}}分)
            </p>
          </div>

          <div style="padding:5px 12px;;">
            <svg class="icon" style="color:#2196f3;font-size: 23px;" aria-hidden="true">
              <use xlink:href="#icon-chakan"></use>
            </svg>
          </div>

        </div>
        <hr class="movie-item-divider">

      </div>

    </div>

    <mt-spinner type="snake" color="#2196f3"></mt-spinner>

  </div>
</template>

<script>
// Promise类型的ajax请求库
import axios from 'axios'
import '../../assets/js/iconfont.js'
import { API } from '../../assets/js/config.js'


export default {
  props: ['id'],
  data() {
    return {
      city: '',
      start: 0,
      movieHotData: [],
      count: 10,
      loading: null,
      busy: false,//避免同一请求多次发送

    }
  },
  mounted() {
    this.city = remote_ip_info["city"];
     this.loading = true;
        this.loadMore();
        this.loading = false;

  },



  methods: {
    getMovieDetail(id){
      this.$router.push({ name: 'movie_detail', params: { id: id }})
    },

    loadMores() {
      if (this.id == '2') {
        this.loading = true;
        this.loadMore();
        this.loading = false;
        // console.log('启动了')
        // console.log(this.loading)
      }
    },

    loadMore: function() {
      let vm = this;

      this.loading = true;
      if (this.busy) {
        return;
      }
      this.busy = true;
      return axios.get(`${API.host}/movie/in_theaters/${vm.city}/${vm.start == '0' ? vm.start : vm.start * 10}/${vm.count}`, {

      })
        .then(function(response) {
          response.data.subjects.forEach(movie => {

            vm.movieHotData.push(movie);
          })
          this.busy = false;
          this.start++;
          this.loading = false;
        }.bind(this))
        .catch(function(error) {
          console.log(error);
        });




    }




  },
}
</script>

<style  rel="stylesheet/less" type="text/less" lang="less" scoped>

</style>