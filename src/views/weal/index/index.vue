<template>
  <div>

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
          // this.$router.push({ name: 'home' });
    console.log('%c You are not expected to understand this',"font-size:20px;color:blue;padding-top:60px;")
  },

  methods: {

    
  },
  watch: {
     
    },

}
</script>

<style  rel="stylesheet/less" type="text/less" lang="less" >
* {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  box-sizing: border-box;
}
.mint-spinner-snake{
  margin:20px auto!important;

}
</style>