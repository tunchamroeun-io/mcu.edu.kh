<template>
    <!--Latest News-->
    <div class="container">
        <vx-card title="Latest News" no-shadow class="mt-3">
            <swiper :options="swiperOptionNews">
                <swiper-slide v-for="(item,index) in all_news" :key="index">
                    <router-link :to="'news/'+item.id+'/'+slugable(item.title)">
                        <img :src="item.thumb" alt="news" class="responsive mb-3">
                        <a href="#" class="mb-3 text-xl">
                            {{item.title}}
                        </a>
                    </router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </vx-card>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.min.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "News",
        components: {
            swiper,
            swiperSlide
        },
        data(){
            return{
                swiperOptionNews: {
                    slidesPerView: 4,
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
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                },
            }
        },
        computed:{
            all_news(){
                return this.$store.getters.all_news
            },
        },
        async created(){
            await this.fetchNews();
        },
        methods:{
            async fetchNews(){
                await this.$store.dispatch('fetchNews')
            },
        }
    }
</script>

<style scoped>

</style>