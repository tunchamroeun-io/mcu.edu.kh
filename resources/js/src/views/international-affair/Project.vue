<template>
    <vs-card>
        <vs-table search pagination max-items="10" :data="all_projects" stripe>

            <template slot="thead">
                <vs-th sort-key="project_name">Project Name</vs-th>
                <vs-th sort-key="logo">Logo</vs-th>
                <vs-th sort-key="project_from">Funded from</vs-th>
                <vs-th sort-key="description">Description</vs-th>
                <vs-th sort-key="status">Status</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" @click="openUrl(tr.url)">
                    <vs-td :data="data[indextr].project_name">
                        {{ data[indextr].project_name }}
                    </vs-td>
                    <vs-td :data="data[indextr].logo">
                        <img :src="tr.logo" :alt="tr.logo" height="150" @click="openUrl(data[indextr].url)">
                    </vs-td>
                    <vs-td :data="data[indextr].project_from">
                        {{ data[indextr].project_from }}
                    </vs-td>
                    <vs-td :data="data[indextr].description">
                        {{ data[indextr].description }}
                    </vs-td>
                    <vs-td :data="data[indextr].project_status">
                        <vs-chip color="primary">{{tr.project_status}}</vs-chip>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vs-card>
</template>

<script>
    export default {
        name: "Project",
        data(){
            return{

            }
        },
        computed:{
            all_projects(){
                return this.$store.getters.all_project
            }
        },
        created() {
            this.fetchProject()
        },
        methods:{
            async fetchProject(){
                await this.$store.dispatch('fetchProject')
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
