import client from '../plugins/contentful';

export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, payload) {
        state.posts = payload;
    }
}

export const actions = {
    async getPosts({commit}) {
        await client.getEntries({
            content_type: 'blogPost'
        }).then((response) => {
            if (response.items.length > 0) {
                commit('setPosts', response.items)
            }
        }).catch(console.error)
    }
}
