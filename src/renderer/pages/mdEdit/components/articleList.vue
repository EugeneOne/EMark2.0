<template>
  <div :style="{left: [showList ? '0': '-200px' ]}" class="articleList">
        <header class="articleListHead">
            头部
        </header>
        <div v-for="(item, index) in articleList" :key="index" class="articleListItem" @click="editArticle(item)">
            <div>{{ item.article_title }}</div>
            <div>{{ item.update_time }}</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'articleList',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            articleList: state => state.article.list,
            showList: state => state.markDown.showList,
		}),
    },
    methods: {
        ...mapActions('article', ['getCurrentArticle']),
        editArticle(item) {
            this.getCurrentArticle(item)
        }
    }
}
</script>

<style>

</style>