<template>
    <div class="m-movie">
        <div class="white-bg topbar-bg">
            <div class="city-entry">
                <span class="city-name">长沙</span>
                <svg class="icon" width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M255.863389 447.784466l255.842922 255.842923 255.841899-255.842923z" /></svg>
            </div>

            <div class="switch-hot" >
                <div class="hot-item active" >正在热映</div>
                <div class="hot-item" >即将上映</div>
            </div>
            <div class="search-entry">
                <svg class="icon" width="25" height="25" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M921.3 874L738.1 690.8c51.3-62.6 82.1-142.5 82.1-229.6 0-200.1-162.8-363-363-363-200.1 0-363 162.8-363 363s162.8 363 363 363c87 0 167-30.8 229.6-82.1L870 925.3c7.1 7.1 16.4 10.6 25.7 10.6s18.6-3.5 25.7-10.6c14.1-14.2 14.1-37.2-0.1-51.3zM166.8 461.2c0-160.1 130.3-290.4 290.4-290.4s290.4 130.3 290.4 290.4-130.3 290.4-290.4 290.4-290.4-130.3-290.4-290.4z" /></svg>
            </div>
        </div>
        <movie-list></movie-list>
    </div>
</template>

<script>
import MovieList from 'components/common/movie-list/MovieList'
import axios from 'axios'
export default {
    components: {
        MovieList
    },
    beforeCreate () {
        axios({
            method: 'post',
            // url: `ajax/comingList?ci=783&token=&limit=10&optimus_uuid=${document.cookie.split(';')[1].split('=')[1]}&optimus_risk_level=71&optimus_code=10`
            url: `history/list?type=3&limit=1`
        }).then((result) => {
            console.log(result)
            console.log(document.cookie.split(';')[1])
        })
    },
    methods: {
        
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
@import '~styles/variables.styl'
.m-movie
    height 100%
    .topbar-bg
        height .44rem
        display flex
        border 0 0 1px 0, #ccc
        background #ffffff
        padding 0 .15rem
        color #666
        font-size .15rem
        .city-entry
            flex 85
            display flex
            align-items center
            justify-content flex-start
        svg
            fill #999
            margin-top -.03rem
        .switch-hot
            flex 210
            display flex
            color #666
            font-size .15rem
            font-weight 700
            &:after
                background transparentify
            .hot-item
                line-height .44rem
                text-align center
                flex 1
                margin  0 .12rem
                &.active
                    color $base-color
                    border-bottom solid .02rem $base-color
        .search-entry
            flex 80
            display flex
            justify-content flex-end
            align-items center
            svg
                fill $base-color


</style>