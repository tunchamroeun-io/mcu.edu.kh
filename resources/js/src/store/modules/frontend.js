const state = {
    corporation:[],
    news:[],
    videos:[],
    galleries:[],
    abouts:[],
    aoc:[],
    project:[],
    collaboration:[],
    banner:[],
};
const getters = {
    all_banner:function (state) {
        return state.banner
    },
    all_collaboration:function (state) {
        return state.collaboration
    },
    all_project:function (state) {
        return state.project
    },
    all_aoc:function (state) {
        return state.aoc
    },
    all_abouts:function (state) {
        return state.abouts
    },
    all_corporation:function (state) {
        return state.corporation
    },
    all_news:function (state) {
        return state.news
    },
    all_videos:function (state) {
        return state.videos
    },
    all_galleries:function (state) {
        return state.galleries
    }
};
const actions = {
    async fetchBanner({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-banner');
            const data = await res.json();
            commit('SET_BANNER',data)
        }catch (e) {
            return false
        }
    },
    async fetchCollaboration({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-collaboration');
            const data = await res.json();
            commit('SET_COLLABORATION',data)
        }catch (e) {
            return false
        }
    },
    async fetchProject({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-project');
            const data = await res.json();
            commit('SET_PROJECT',data)
        }catch (e) {
            return false
        }
    },
    async fetchAoc({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-aoc');
            const data = await res.json();
            commit('SET_AOC',data)
        }catch (e) {
            return false
        }
    },
    async fetchAbout({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-about');
            const data = await res.json();
            commit('SET_ABOUT',data)
        }catch (e) {
            return false
        }
    },
    async fetchGalleries({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-gallery');
            const data = await res.json();
            commit('SET_GALLERY',data);
        }catch (e) {
            return false
        }
    },
    async fetchCorporation({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-corporation');
            const data = await res.json();
            commit('SET_CORPORATION',data);
        }catch (e) {
            return false
        }
    },
    async fetchNews({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-news');
            const data = await res.json();
            commit('SET_NEWS',data)
        }catch (e) {
            return false
        }
    },
    async fetchVideos({commit}){
        try {
            const res = await fetch('https://mcu.siqware.com/api/get-videos');
            const data = await res.json();
            commit('SET_VIDEO',data)
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_BANNER:function (state,data) {
        state.banner = data
    },
    SET_COLLABORATION:function (state,data) {
        state.collaboration = data
    },
    SET_PROJECT:function (state,data) {
        state.project = data
    },
    SET_AOC:function (state,data) {
        state.aoc = data
    },
    SET_ABOUT:function (state,data) {
        state.abouts = data
    },
    SET_CORPORATION:function (state,data) {
        state.corporation = data
    },
    SET_NEWS:function (state,data) {
        state.news = data
    },
    SET_VIDEO:function (state,data) {
        state.videos = data
    },
    SET_GALLERY:function (state,data) {
        state.galleries = data
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
}