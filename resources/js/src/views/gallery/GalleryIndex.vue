<template>
    <div class="container">
        <vx-card>
                <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div class="vx-row">
                <div class="vx-col md:w-1/3 sm:w-1/2 w-full" v-for="(image, imageIndex) in images" :key="imageIndex">
                    <img
                            class="image shadow-md"
                            @click="index = imageIndex"
                            :src="image"
                            alt="gallery"
                    />
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';
    export default {
        name: "GalleryIndex",
        components:{'gallery': VueGallery},
        data(){
            return{
                images:[],
                index: null,
                galleries:[{gallery_album:[]}],
            }
        },
        computed:{
            all_galleries(){
                return this.$store.getters.all_galleries
            },
        },
        async created(){
            await this.fetchGalleries()
        },
        methods:{
            async fetchGalleries(){
                let self = this;
                await self.$store.dispatch('fetchGalleries').then(function () {
                    self.filterSingleGallery();
                    self.imagePathOnly();
                })
            },
            filterSingleGallery(){
                let self = this;
                self.galleries = self.all_galleries.filter(function (x) {
                    return parseInt(x.id) === parseInt(self.$route.params.id)
                })
            },
            imagePathOnly(){
                let self = this;
                self.galleries[0].gallery_album.forEach(function (item,index) {
                    self.images.push(item.path)
                })
            }
        }
    }
</script>

<style scoped>
    .image {
        width: 100%;
        height: 200px;
        background-size: cover;
        cursor: pointer;
        margin: 5px;
        border-radius: 3px;
        border: 1px solid lightgray;
        object-fit: cover;
    }
</style>