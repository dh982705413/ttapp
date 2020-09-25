import Vue from 'vue'
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Field,
  Cell,
  CellGroup,
  Toast,
  Form,
  CountDown,
  Image as VanImage,
  Lazyload,
  Grid,
  GridItem,
  Tab,
  Tabs,
  List,
  PullRefresh
} from 'vant'

Vue.use(Lazyload, {
  error: '/img/avatar.jpg'
})
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Grid)
Vue.use(VanImage)
Vue.use(GridItem)
Vue.use(CountDown)
Vue.use(Form)
Vue.use(Toast)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Field)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Button)
