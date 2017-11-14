import alert from './index.vue'
export default {
  install: function (Vue, options) {
    var instance
    Vue.prototype.$alert = function (opts, fn) {
      if (instance) {
        instance.$el.remove()
      }
      var Alert = Vue.extend(alert)
      instance = new Alert({
        el: document.createElement('div')
      })
      opts = Object.assign({}, opts, options)
      for (var key in opts) {
        instance[key] = opts[key]
      }
      typeof fn === 'function' && instance.$on('submit', fn)
      document.body.appendChild(instance.$el)
      instance.open()
      return instance
    }
  }
}
