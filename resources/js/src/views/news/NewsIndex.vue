<template>
    <div class="container">
        <vx-card>
            <div v-html="news[0].content"></div>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "NewsIndex",
        data(){
            return{
                news:[{content:''}],
            }
        },
        computed:{
            all_news(){
                return this.$store.getters.all_news
            },
        },
        async created(){
            await this.fetchNews()
        },
        methods:{
            async fetchNews(){
                let self = this;
                await self.$store.dispatch('fetchNews').then(function () {
                    self.filterSingleNews();
                })
            },
            filterSingleNews(){
                let self = this;
                self.news = self.all_news.filter(function (x) {
                    return parseInt(x.id) === parseInt(self.$route.params.id)
                })
            }
        }
    }
</script>

<style scoped>

</style>