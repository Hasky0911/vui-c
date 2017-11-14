import loader from './index.vue'
export default {
  install: function (Vue, options) {
    var Loader = Vue.extend(loader)
    var instance = new Loader({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    Vue.prototype.$loader = {
      open: function (text) {
        instance.text = text || ''
        instance.open()
      },
      close: function () {
        instance.close()
      }
    }
  }
}
