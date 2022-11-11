<template>
  <div class="edit">
    <el-form ref="form" @submit.native.prevent="update" :model="adminuser" label-width="120px">
      <el-form-item label="管理员名称" prop="username">
        <el-input v-model="adminuser.user_name" placeholder="管理员名称111"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="type" native-type="submit">更新</el-button>
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
        password: "",
      },
    };
  },
  created() {
    this.result();
  },
  methods: {
    //更新数据
    update() {
      //
      this.$http
        .put(`/adminuser/${this.$route.params.id}`, {
          user_name: this.adminuser.user_name,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            this.$message({
              message: "更新用户成功",
              type: "success",
            });
            //跟新成功后跳转
            this.$router.push("/article/index");
          } else {
            // 更新失败提示消息
            this.$message.error(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 必须先将原有的数据展示出来供我更新
    result() {
      this.$http
        .get(`/adminuser/${this.$route.params.id}`) //注意这里是$route，不是$router
        .then((res) => {
          console.log(res.data);
          this.adminuser = res.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
