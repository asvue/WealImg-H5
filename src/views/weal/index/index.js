import Vue from 'vue'
//引入全局css样式
import '../../../assets/css/normalize.css'
// 引入懒加载
// import { Lazyload } from 'mint-ui';
import Mint from 'mint-ui';
Vue.use(Mint);
// Vue.use(Lazyload);
//引入路由
import router from './router'
import VueTouch from 'vue-touch'
//引入加载动画
// import { Spinner } from 'mint-ui';

// Vue.component(Spinner.name, Spinner);
// //引入顶部选项卡
// import { Navbar } from 'mint-ui';

// Vue.component(Navbar.name, Navbar);
// import { Cell } from 'mint-ui';

// Vue.component(Cell.name, Cell);

// import { TabContainer, TabContainerItem } from 'mint-ui';

// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);

// //引入button
// import { Button } from 'mint-ui';

// Vue.component(Button.name, Button);

// //引入底部tab
// import { Tabbar, TabItem } from 'mint-ui';

// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

// //引入滚动刷新
// import { InfiniteScroll } from 'mint-ui';
// Vue.use(InfiniteScroll);

// //引入顶部导航栏
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

Vue.use(VueTouch, {name: 'v-touch'})

//引入星星评分系统
import {Rate} from 'element-ui'
Vue.component(Rate.name, Rate);


import App from './index.vue'





new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
