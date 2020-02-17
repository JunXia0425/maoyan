<template>
    <div class="page-wrap">
        <div class="swiper-header movie-ad" style="display: none;"></div>
        <div class="tab-block">
            <div class="tab-content">
                <div class="page f-hot active" data-hot=".f-hot" data-cid="c_3j5p10oz">
                    <div class="list-wrap" style="margin-top: 0px;">
                        <MovieItem></MovieItem>
                    </div>
                    <div class="more"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieItem from 'components/common/movie-list/MovieItem'
export default {
    components: {
        MovieItem
    }
}
</script>

<style lang="stylus" scoped>

.page
    padding-right .15rem


</style>