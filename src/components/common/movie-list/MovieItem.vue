<template>
        <div class="coming-list">
                            <div>
                                <p class="group-date">2月14日 周五</p>

                                <div
                                    class="item"
                                    data-id="1230199"
                                    data-bid="dp_wx_home_movie_list"
                                >
                                    <div class="main-block">
                                        <div class="avatar" sort-flag>
                                            <div class="default-img-bg">
                                                <img
                                                    src="https://p0.meituan.net/128.180/movie/f09d25b5dc2d0080fa93db9ffaaf4c5a6389423.jpg"
                                                    onerror="this.style.visibility='hidden'"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-outline-b content-wrapper">
                                            <div class="column content">
                                                <div class="box-flex movie-title">
                                                    <div class="title line-ellipsis">小妇人</div>
                                                    <span class="version v3d"></span>
                                                </div>

                                                <div class="detail column">
                                                    <div class="wantsee line-ellipsis">
                                                        <span class="person">49913</span>
                                                        <span class="p-suffix">人想看</span>
                                                    </div>

                                                    <div
                                                        class="actor line-ellipsis"
                                                    >主演: 西尔莎·罗南,艾玛·沃特森,佛罗伦斯·珀</div>

                                                    <div class="actor line-ellipsis">2020-02-14上映</div>
                                                </div>
                                            </div>

                                            <div class="button-block" data-id="1230199">
                                                <MovieButton></MovieButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<script>
import MovieButton from 'components/common/movie-list/MovieButton'
export default {
    components: {
        MovieButton
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/libs/movie-list.css'
@import '~styles/ellipsis.styl'
@import '~styles/border.styl'
.line-ellipsis
    ellipsis()
.movie-title
    display flex
.content-wrapper
    height auto !important
    max-height none !important
    border 0 0 1px 0, #ccc
</style>