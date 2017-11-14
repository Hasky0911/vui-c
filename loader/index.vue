<template>
  <div class="loader-blk" v-show="isShow">
    <div class="loader-bd">
      <div class="loader"></div>
      <p v-show="text">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  data () {
    return {
      isShow: false,
      text: ''
    }
  },
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader-blk {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  top:0;
  left:0;
}
.loader-blk .loader-bd {
  width: 3rem;
  padding: .3rem .2rem;
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: center;
  color:#333;
  border-radius: .06rem;

}
.loader-blk .loader-bd p {
  padding-top: .1rem;
}
.loader {
  display: inline-block;
  text-indent: -9999em;
  border-top: 3px solid rgba(0, 0, 0, 0.3);
  border-right: 3px solid rgba(0, 0, 0, 0.3);
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  border-left: 3px solid #000;
  -webkit-animation: load .72s infinite linear;
  animation: load .72s infinite linear;
}
.loader,.loader:after {
  border-radius: 50%;
  width: .4rem;
  height: .4rem;
}

@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
