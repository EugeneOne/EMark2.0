<template>
  <div class="article-list">
      <div class="container">
        <header class="header">Header</header>
            <!-- <el-aside class="article-aside" width="200px">
                <div class="aside-title">文章列表</div>
                <div class="scroll-content">
                    <el-card v-for="(item, index) in 50" :key="index" class="card">
                        <div slot="header" class="clearfix">
                            <span>{{ item.article_title || 'title' }}</span>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{ item.article_content || 'content' }}
                        </div>
                    </el-card>
                </div>
            </el-aside> -->
        <div class="container">
            <md-edit />
        </div>
    </div>
  </div>
</template>

<script>
import mdEdit from '../mdEdit/markdown'
import { mapActions } from 'vuex'

export default {
    name: 'ArticleList',
    components: {mdEdit},
    data() {
        return {
            articleList: []
        }
    },
    created() {
        this.initData();
    },
    methods: {
        ...mapActions ('article',[
            'getAllArticle'
        ]),
        initData() {
            this.getAllArticle()
        },
        // 获取所有文章列表
        // getAllArticle() {
        //     console.log('------>>>>');
        //     // this.$http(this.$api.getArticle).then(res => {
        //     //     this.articleList = res.result;
        //     // })
        //     this.getAllArticle();
        // }
    }
}
</script>

<style lang='scss'>
.article-list {
    .container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .header {
        height: 60px;
        background: rgba(0,0,0,.2);
    }
    .article-aside {
        position: relative;
        padding-top: 50px;
        .aside-title {
            height: 50px;
            width: 100%;
            position: absolute;
            top: 0;
            border-bottom: 1px solid rgba(0,0,0,.6);
        }
        .scroll-content {
            height: 100%;
            overflow: auto;
        }
        .card {
            cursor: pointer;
        }
    }
    .el-main {
        position: relative;
    }
}
</style>