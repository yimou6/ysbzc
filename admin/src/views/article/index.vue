<template>
  <div>
    <div class="search">
      <el-form :model="form" inline>
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" size="small" type="primary" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="标签" prop="tag"></el-table-column>
      <el-table-column label="创建时间" prop="createDate"></el-table-column>
      <el-table-column label="更新时间" prop="updateDate"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button size="mini" type="primary" @click="modify(row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

<!--    <div class="pagination" v-show="table.total > 0">-->
<!--      <el-pagination background-->
<!--                     layout="prev, pager, next"-->
<!--                     :current-page="table.current"-->
<!--                     :total="table.total"></el-pagination>-->
<!--    </div>-->
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { list } from './api'
import { ElMessage } from 'element-plus'
export default {
  name: 'Article',
  setup() {
    const form = reactive({
      title: ''
    })
    // const table = reactive({
    //   data: [],
    //   total: 0,
    //   limit: 10,
    //   current: 1
    // })
    const a = ref(1)
    let tableData = ref([])

    const search = async () => {
      const res = await list(Object.assign({ limit: 10, current: 1 }, form))
      if (res.code === 1) {
        ElMessage.error('获取数据失败')
      } else {
        const list = JSON.parse(JSON.stringify(res.data.docs))
        tableData.value = list
        console.log(tableData)
      }
    }
    const modify = () => {
      // todo
    }
    const del = () => {
      // todo
    }

    // onMounted(search)

    return {
      form,
      tableData,
      a,
      search,
      modify,
      del
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  text-align: right;
  margin-top: 10px;
}

</style>
