<template>
  <div id="note-sidebar">
    <div class="title">
      <span class="btn add-note" @click="addNote">添加笔记</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{curBook.title}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for='(notebook,index) in notebooks' :command="notebook.id" v-bind:key="index">{{notebook.title}}</el-dropdown-item>
            <el-dropdown-item command="trash">回收站</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
    
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for='(note,index) in notes' v-bind:key="index">
        <router-link :to='`/note?noteId=${note.id}&notebookId=${curBook.id}`'>
        <span class="date">{{note.updatedAtFriendly}}</span>
        <span class="title">{{note.title}}</span>
        </router-link>

      </li>
    </ul>
  </div>
</template>

<script>
 
import Notebooks from '../apis/notebook'
import Notes from '../apis/notes'
// import notebook from '../apis/notebook';
import Bus from '@/helpers/bus'

//window.notes=Notes

export default {
  created(){
    Notebooks.getAll()
    .then(res=>{
      this.notebooks=res.data
      this.curBook = this.notebooks.find(notebook => notebook.id == this.$route.query.notebookId)||this.notebooks[0]||{}
      
      return Notes.getAll({notebookId: this.curBook.id})
      
    }).then(res=>{
      this.notes=res.data
      this.$emit('update:notes',this.notes)
      Bus.$emit('update:notes',this.notes)
      // this.$router.replace({
      //   path:'/note',
      //   query:{
      //     noteId: this.curNote.id,
      //     notebookId: this.curBook.id
      //   }
      // })
    })
  },
  data(){
    return{
      notebooks:[],
      notes:[],
      curBook:{},
      
    }
  },
  props:['curNote'],
  
  methods:{
    handleCommand(notebookId) {
        if(notebookId =='trash'){
          return this.$router.push({path:'/trash'})
        }
        this.curBook = this.notebooks.find(notebook => notebook.id ==notebookId)
          Notes.getAll({notebookId})
          .then(res=>{
            this.notes = res.data
            this.$emit('update:notes',this.notes)
          })
          
        },
    addNote:function(){
      console.log('aaaaaaaaaaa')
      Notes.addNote({notebookId:this.curBook.id})
        .then(res=>{
          
            this.notes.unshift(res.data)
        })
        
    }

  },
    
  
}
</script>

<style lang='less' scoped>
@import url(../assets/css/note-sidebar.less);
</style>


