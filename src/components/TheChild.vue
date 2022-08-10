<template>
  <div class="childFrame">
    <h2>这是子组件</h2>
    <h2>名字为 {{ useStore.nameVisible ? useStore.gName : useStore.xName }}</h2>
    <el-button type="primary" @click="changeAge">修改年龄为{{ useStore.ageVisible ? useStore.xAge : useStore.gAge }}</el-button>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user"

const useStore = useUserStore()

const changeAge = () => {
  useStore.ageVisible = !useStore.ageVisible
}
</script>

<style scoped>
.childFrame {
  margin-top: 10px;
  padding: 20px 20px 50px;
  border: 2px solid #2c3e50;
  border-radius: 10px;
  text-align: center;
}
</style>