<template>
    <vx-card no-radius no-shadow>
        <!--<div class="vx-row">
            <div class="vx-col w-full lg:w-1/4 rounded-lg">
                <vx-card>
                    <ul class="faq-topics mt-4">
                        <li class="p-2 font-medium flex items-center" @click="">
                            <div class="h-3 w-3 rounded-full mr-2 bg-danger-gradient"></div><span class="cursor-pointer">Home</span>
                        </li>
                        <li class="p-2 font-medium flex items-center" @click="">
                            <div class="h-3 w-3 rounded-full mr-2 bg-success"></div><span class="cursor-pointer">Activities</span>
                        </li>
                    </ul>
                </vx-card>
            </div>
            &lt;!&ndash; FAQ COL &ndash;&gt;
            <div class="vx-col w-full lg:w-3/4 mt-12 md:mt-0">
                <vx-card v-if="is_home">

                </vx-card>
                <vx-card title="Activities">
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
        </div>-->
        <h3>Coming !</h3>
    </vx-card>
</template>

<script>
    export default {
        name: "Library",
    }
</script>

<style scoped>

</style>