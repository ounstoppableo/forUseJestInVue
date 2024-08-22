<script setup>
import { ref } from 'vue'
import {getList} from '../api/api'
const tableData = ref([])
getList().then(res=>{
  tableData.value = res.data
})
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<style scoped>

</style>
