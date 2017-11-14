import toast from './index.vue'
export default {
  install: function (Vue, options) {
    var timer = null
    var Toast = Vue.extend(toast)
    var instance = new Toast({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    Vue.prototype.$toast = {
      open: function (text) {
        instance.text = text || ''
        instance.open()
        clearTimeout(timer)
        timer = setTimeout(function () {
          instance.close()
        }, 2000)
      },
      close: function () {
        instance.close()
      }
    }
  }
}
