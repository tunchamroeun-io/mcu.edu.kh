<template>
    <div>
        <div class="container">
            <!--Latest Video-->
            <vx-card title="Latest Video">
                <swiper :options="swiperOptionVideo">
                    <swiper-slide v-for="(item,index) in all_videos" :key="index">
                        <iframe class="responsive" :src="'https://www.youtube.com/embed/'+item.url" frameborder="0" allowfullscreen></iframe>
                        <a href="#" class="mb-3 text-xl">
                            {{item.title}}
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </vx-card>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.min.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOptionVideo: {
                    slidesPerView: 3,
                    slidesPerColumn: 3,
                    spaceBetween: 30,
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }
                }
            }
        },
        computed:{
            all_videos(){
                return this.$store.getters.all_videos
            },
        },
        async created(){
            await this.fetchVideos();
        },
        methods:{
            async fetchVideos(){
                await this.$store.dispatch('fetchVideos')
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>