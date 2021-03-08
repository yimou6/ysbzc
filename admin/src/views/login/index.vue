<template>
  <div class="login" v-loading="loading">
    <div class="login-form">
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="name">
          <el-input v-model="form.name" size="small">
            <template #prepend><i class="el-icon-user"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="form.pwd" type="password" size="small">
            <template #prepend><i class="el-icon-warning-outline"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleClick">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { login } from './api'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup() {
    const form = reactive({
      name: 'admin',
      pwd: 'mmm111'
    })
    const rules = reactive({
      name: [{required: true, message: 'not required', trigger: 'blur'}],
      pwd: [{required: true, message: 'not required', trigger: 'blur'}]
    })
    let loading = ref(false)
    const formRef = ref(null)
    const router = useRouter()

    const handleClick = async () => {
      loading = true
      formRef.value.validate(function (valid) {
        if (!valid) return 0
      })
      const res = await login(form)
      if (res.code === 1) {
        ElMessage.error('login is fail')
      } else {
        sessionStorage.setItem('ID', res.data._id)
        await router.push({name: 'Home'})

      }
      loading = false
    }

    return {
      form,
      rules,
      loading,
      formRef,
      handleClick
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 100%;
    max-width: 360px;
    padding: 20px;
  }
}
</style>
