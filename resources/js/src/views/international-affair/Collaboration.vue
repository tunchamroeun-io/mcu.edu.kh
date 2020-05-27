<template>
    <vs-card>
        <vs-table search pagination max-items="10" :data="all_collaborations" stripe>

            <template slot="thead">
                <vs-th sort-key="logo">Logo</vs-th>
                <vs-th sort-key="org_name">Organization</vs-th>
                <vs-th sort-key="description">Description</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].logo">
                        <img :src="tr.logo" :alt="tr.logo" height="150" @click="openUrl(data[indextr].url)">
                    </vs-td>
                    <vs-td :data="data[indextr].org_name">
                        {{ data[indextr].org_name }}
                    </vs-td>
                    <vs-td :data="data[indextr].description">
                        {{ data[indextr].description }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vs-card>
</template>

<script>
    export default {
        name: "Collaboration",
        data(){
            return{

            }
        },
        computed:{
            all_collaborations(){
                return this.$store.getters.all_collaboration
            }
        },
        created() {
            this.fetchCollaboration()
        },
        methods:{
            async fetchCollaboration(){
                await this.$store.dispatch('fetchCollaboration')
            },
            openUrl(url){
                var win = window.open(url, '_blank');
                win.focus();
            }
        }
    }
</script>

<style scoped>

</style>
