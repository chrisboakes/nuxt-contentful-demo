<template>
    <div class="single-post">
        <div v-if="!isLoading" class="single-post__article">
        	<h1 class="single-post__title">
                {{ currentPost.fields.title }}
            </h1>
            <div class="single-post__content" v-html="$md.render(currentPost.fields.content)"></div>
        </div>
        <p v-else class="single-post__loading">
            Loading
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        currentPost() {
            return this.$store.state.post.currentPost
        },
        isLoading() {
            return this.$store.state.post.isLoading
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('post/getPostBySlug', params.slug)
    }
}
</script>
