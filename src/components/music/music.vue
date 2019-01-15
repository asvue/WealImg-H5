<template>
  <div id='music'>
   

  </div>
</template>

<script>


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
   



  },
components:{
 
}

}
</script>

<style  rel="stylesheet/less" type="text/less" lang="less" >
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