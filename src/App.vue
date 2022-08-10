<template>
  <h2>Pinia版本</h2>
  <div class="frame">
    <h2>这是父组件</h2>
    <h2>年龄为{{ useStore.ageVisible ? useStore.gAge : useStore.xAge }}</h2>
    <el-button type="primary" @click="changeName">修改名字为{{ useStore.nameVisible ? useStore.xName : useStore.gName }}</el-button>
    <the-child></the-child>
  </div>
</template>

<script setup>
import TheChild from './components/TheChild.vue'
import { useUserStore } from "./stores/user";

const useStore = useUserStore()

const changeName = () => {
  useStore.nameVisible = !useStore.nameVisible
}
</script>

<style scoped>
body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
  Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

h2 {
  text-align: center;
}

.frame {
  width: 400px;
  margin: 20px auto;
  padding: 20px 20px 50px;
  border: 2px solid #2c3e50;
  border-radius: 10px;
  text-align: center;
}
</style>