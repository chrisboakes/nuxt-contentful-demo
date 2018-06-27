<template>
    <div class="container">
        <h2>Latest posts</h2>
        <ul>
            <li v-if="posts" v-for="(post, index) in posts" :key="index">
                <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$store.state.posts.posts
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('posts/getPosts', params.slug)
    }
}
</script>
