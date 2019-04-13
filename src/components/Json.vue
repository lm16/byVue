<template>
  <div>
    <table>
      <tr>
        <td>id</td>
        <td>body</td>
        <td>postId</td>
      </tr>
      <tr v-for="comment in comments">
        <td>{{comment.id}}</td>
        <td>{{comment.body}}</td>
        <td>{{comment.postId}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          comments:[]
        }
      },

      mounted(){
        var _this = this;
        this.axios.get('http://localhost:3000/posts/1/comments')
          .then(function(res){
            // alert(res.data);
            _this.comments = res.data;
            alert(this.comments)
          })
      }
    }
</script>

<style scoped>

</style>
