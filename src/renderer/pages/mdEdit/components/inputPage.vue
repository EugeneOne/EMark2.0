<template>
    <div class="inputPage" :style="{width: width}" ref="inputPage">
        <textarea @scroll="scroll" id="inputArea" :value="txt" autofocus @input="sertTxtStore" @drop.stop.prevent='dragging'></textarea>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    props: {
        width: {
            type: String,
            default: "50%"
        }
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            txt: state => state.markDown.txt,
            filePath: state => state.markDown.filePath,
            isNeedSave: state => state.markDown.isNeedSave,
            currentArticle: state => state.article.current
        })
    },
    watch: {
        currentArticle: {
            handler(val) {
                document.getElementById("inputArea").value = val.article_content;
            },
            deep: true
        }
    },
    mounted() {
        let textarea = document.getElementById("inputArea");
    },
    methods: {
        ...mapActions('markDown', [
            'sertTxt',
            'isSave',
            'setfilePath'
        ]),
        scroll(e) {
            let outPage = document.querySelector(".outerPage");
            let inputTxt = document.querySelector("#inputArea");
            outPage.scrollTop = e.target.scrollTop / inputTxt.scrollHeight * outPage.scrollHeight;
        },
        sertTxtStore(e) {
            let value = e.target.value;
            this.sertTxt(value);
            this.isSave(true);
        },
        dragging(event) {
            let self = this;
            let dt = event.dataTransfer;
            let files = dt.files;
            var path = files[0].path;
            //console.log("path:", files)
            //如果拖拽的文件不是本文件
            if (self.filePath != path) {
                if (self.isNeedSave) {
                    this.$emit("dialogAndSave")
                }
                let reader = new FileReader();
                //  console.log(files,reader)
                reader.readAsText(files[0], 'UTF-8');
                reader.onload = function (e) {
                    let value = e.target.result;
                    document.getElementById("inputArea").value = e.target.result;
                    self.sertTxt(e.target.result)
                }
                //console.log("path:", path)
                self.setfilePath(path);
            }
        }
    }
}
</script>
<style lang="scss">
.inputPage {
    box-shadow: 0 10px 10px #eee;
    overflow: hidden;
    #inputPage {
        cursor: text;
    }
}
</style>
