import alert from './alert'
import loader from './loader'
import toast from './toast'

export default {
  install: function (Vue, options) {
    Vue.use(alert)
    Vue.use(loader)
    Vue.use(toast)
  }
}
/*
* example:
* this.$alert({title: '', icon: 2, text: [''], explain: [''], btn: '', hasClose: false}, function () {})
* this.$loader.open('text'); this.$loader.close()
* this.$toast.open('text'); this.$toast.close()
*/
