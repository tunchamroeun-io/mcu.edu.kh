<template>
    <vx-card no-radius no-shadow>
        <div class="vx-row">
            <div class="vx-col w-full mb-3">
                <vs-select
                        autocomplete
                        class="w-full"
                        label="Select Office or Center"
                        v-model="office"
                        @input="filterOffice(office);filterNews(office)"
                >
                    <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in officeOnly" />
                </vs-select>
            </div>
            <div class="vx-col w-full lg:w-1/4 rounded-lg">
                <vx-card>
                    <ul class="faq-topics mt-4">
                        <li class="p-2 font-medium flex items-center" @click="is_home=true;is_activity=false">
                            <div class="h-3 w-3 rounded-full mr-2 bg-danger-gradient"></div><span class="cursor-pointer">Home</span>
                        </li>
                        <li class="p-2 font-medium flex items-center" @click="is_home=false;is_activity=true">
                            <div class="h-3 w-3 rounded-full mr-2 bg-success"></div><span class="cursor-pointer">Activities</span>
                        </li>
                    </ul>
                </vx-card>
            </div>
            <!-- FAQ COL -->
            <div class="vx-col w-full lg:w-3/4 mt-12 md:mt-0">
                <vx-card v-if="is_home">
                    <h4 class="mb-2">{{filteredOffice[0].name}}</h4>
                    <div v-html="filteredOffice[0].content">
                    </div>
                </vx-card>
                <vx-card title="Activities" v-if="is_activity">
                    <swiper :options="swiperOptionNews">
                        <swiper-slide v-for="(item,index) in newsOnly" :key="index">
                            <router-link :to="'news/'+item.id+'/'+slugable(item.title)">
                                <img :src="item.thumb" alt="news" class="responsive mb-3">
                                <a href="#" class="mb-3 text-xl">
                                    {{item.title}}
                                </a>
                            </router-link>
                        </swiper-slide>
                    </swiper>
                </vx-card>
            </div>
        </div>
    </vx-card>
</template>

<script>
    import 'swiper/dist/css/swiper.min.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "Office",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
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
                office:'Research and Development Office',
                officeOnly : [],
                newsOnly : [],
                major_index:0,
                filteredOffice:[{majors:[]}],
                is_home:true,
                is_activity:false,
            }
        },
        computed: {
            all_aoc(){
                return this.$store.getters.all_aoc
            },
            all_news(){
                return this.$store.getters.all_news
            },
        },
        async created(){
            await this.fetchNews();
            await this.fetchAoc();
        },
        methods:{
            fetchNews(){
                let self = this;
                self.$store.dispatch('fetchNews').then(function () {
                    self.filterNews(self.office)
                });
            },
            fetchAoc(){
                let self = this;
                self.$store.dispatch('fetchAoc').then(function () {
                    self.filterOffice(self.office)
                })
            },
            filterOffice(name){
                let self = this;
                self.officeOnly = self.all_aoc.filter(function (x) {
                    return x.majors.length===0
                });
                self.filteredOffice = self.officeOnly.filter(function (x) {
                    return x.name === String(name)
                });
            },
            filterNews(name){
                let self = this;
                self.newsOnly = self.all_news.filter(function (x) {
                    return x.category === String(name);
                });
            },
            majorIndex(index){
                this.major_index = index
            }
        }
    }
</script>

<style scoped>

</style>