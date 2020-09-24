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
  GridItem
} from 'vant'

Vue.use(Lazyload, {
  lazyComponent: true
})
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
