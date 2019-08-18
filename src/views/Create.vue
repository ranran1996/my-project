<template>
  <div class="create">
    <el-form ref="form" @submit.native.prevent="onSubmit" :model="adminuser" label-width="120px">
      <el-form-item label="管理员名称" prop="username">
        <el-input v-model="adminuser.user_name" placeholder="管理员名称"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="adminuser.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="type" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adminuser: {
        user_name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.adminuser);
      //ajax提交
      this.$http
        .post("adminuser", this.adminuser)
        .then(res => {
          console.log(res.data);
          //成功后提示信息
          if (res.data.status == 200) {
            this.$message({
              message: "添加用户成功",
              type: "success"
            });
            //成功后跳转到后台用户管理列表页
            this.$router.push("/article/index");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>