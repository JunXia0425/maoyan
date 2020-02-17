<template>
    <div class="home-wrap">
        <Header></Header>
        <main>
            <Movies></Movies>
        </main>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from 'components/layout/Header'
import TabBar from 'components/layout/TabBar'
import Movies from 'pages/movies/Movies'
export default {
    components: {
        Header,
        TabBar,
        Movies
    }
}
</script>

<style lang="stylus" scoped>
.home-wrap
    height 100%
    display flex
    flex-direction column
    background #ffffff
    main
        flex 1
</style>