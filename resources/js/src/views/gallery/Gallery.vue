<template>
    <div>
        <div class="container">
            <!--Latest Gallery-->
            <vx-card title="Latest Gallery">
                <swiper :options="swiperOptionGallery">
                    <swiper-slide v-for="(item,index) in all_galleries" :key="index">
                        <router-link :to="'gallery/'+item.id+'/'+slugable(item.title)">
                            <img class="responsive" :src="item.thumb" alt="gallery">
                            <a href="#" class="mb-3 text-xl">
                                {{item.title}}
                            </a>
                        </router-link>
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
                swiperOptionGallery: {
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
                }
            }
        },
        computed:{
            all_galleries(){
                return this.$store.getters.all_galleries
            }
        },
        async created(){
            await this.fetchGalleries();
        },
        methods:{
            async fetchGalleries(){
                await this.$store.dispatch('fetchGalleries')
            },
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>