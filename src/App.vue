<template>
  <Home></Home>
</template>

<script>
import "@/assets/styles/reset.styl";
import Home from './pages/Home'
export default {
  data() {
    return {
      greeting:  'hello'
    }
  },
  methods: {
    handleClick () {
      console.log(0)
    }
  },
  components: {
    Home
  },
  mounted(){
    console.log(document.cookie)
    this.$api.videoList({
      token: '',
      optimus_uuid:`5D1120804B2811EA92605DB2841D28113B80F0F300CC45BFBEF63CBBCCE98E92`
    }).then(res=>console.log(res))
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
