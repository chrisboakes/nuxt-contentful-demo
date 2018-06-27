import client from '../plugins/contentful';

export const state = () => ({
    currentPost: {},
    isLoading: true
})

export const mutations = {
    setCurrentPost(state, payload) {
        state.currentPost = payload;
    },
    setLoading(state, payload) {
        state.isLoading = payload;
    }
}

export const actions = {
    async getPostBySlug({commit}, slug) {
        commit('setLoading', true);
        await client.getEntries({
            content_type: 'blogPost',
            'fields.slug': slug
        }).then((response) => {
            commit('setCurrentPost', response.items[0]);
            commit('setLoading', false);
        }).catch(console.error);
    }
}
