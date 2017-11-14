### 安装／引入
```javascript
  npm i -S git+https://github.com/vespex/vui.git
  import vui from 'vui'
  Vue.use(vui)
```

### 使用
```javascript
example:
this.$alert({title: '', icon: 2, text: [''], explain: [''], btn: '', hasClose: false}, function () {}) // title: 标题； icon: 图标； text: 文字； explain: 说明； btn: 按钮文字； hasClose: 是否有关闭按钮
this.$loader.open('text'); this.$loader.close()
this.$toast.open('text'); this.$toast.close()
```
