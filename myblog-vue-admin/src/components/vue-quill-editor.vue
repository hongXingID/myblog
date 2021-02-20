<template>
  <div class="edit_container">
    <div class="title">
      <el-input v-model="title" placeholder="请输入标题"></el-input>
    </div>
    <div class="tag">
      <div class="description">
        <el-select v-model="tags" placeholder="请选择标签">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>

    <div class="description">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入描述"
        v-model="description"
        
      >
      </el-input>
    </div>
    <div class="content">
      <quill-editor
        v-model='content'
        ref="myQuillEditor"
        :options="editorOption"
      >
      </quill-editor>
    </div>
    <div class="btn">
      <el-button @click="handleClick">提交</el-button>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// import qs from 'qs'
export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      title: "",
      textarea: "",
      content: ``,
      description:'',
      options: [
        {
          value: "技术",
          label: "技术",
        },
        {
          value: "生活",
          label: "生活",
        },
        {
          value: "美食",
          label: "美食",
        },
        {
          value: "吐槽",
          label: "吐槽",
        },
      ],
      tags: "",
    };
  },
  methods: {

    handleClick() {
        this.$axios({
          url: "http://8.136.1.191/api/api/blogArticle",
          method: "post",
  
          data: {
            title: this.title,
            description: this.description,
            content: this.content,
            tags: this.tags,
          },
        }).then(()=>{
            alert('已提交')
        });
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
};
</script>

<style>
.btn {
  margin-top: 10px;
  text-align: center;
}
.title,
.tags,
.description,
.content,
.btn{

  margin:15px 30px;
}
  .ql-editor{
        height:360px;
    }
</style>