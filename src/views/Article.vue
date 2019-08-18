<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!--scope.$index当前是多少行，scope.row表示这行的所有数据，包括id,user_name,email -->
        <!-- {{scope.$index}}--{{scope.row.id}} scope.row.id这个才是数据表中需要的数据 -->
        <el-button size="mini" @click="edit(scope.$index, scope.row.id)">编辑</el-button>
        <el-button size="mini" type="danger" @click="del(scope.$index, scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.result();
  },
  methods: {
    result() {
      this.$http
        .get("adminuser")
        .then(res => {
          console.log(res.data.data);
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 编辑
    edit(index, id) {
      // 首先跳转到编辑页面
      this.$router.push(`/article/${id}/edit`);
    },
    //删除
    del(index, id) {
      //ajax删除，根据id删除
      this.$http
        .delete("adminuser/" + id) //常规通用写法
        // .delete(`adminuser/${id}`)     //vue写法
        .then(res => {
          console.log(res.data);
          if (res.data.status == 200) {
            this.$message({
              message: "删除用户成功",
              type: "success"
            });
            //删除成功后，重新加载这个页面的数据，避免删除成功了，但是页面数据还在
            this.result();
          } else {
            // 删除失败提示消息
            this.$message.error(res.data.message);
          }
        })
        .catch(err => {
          console.error(err.data);
        });
    }
  }
};
</script>