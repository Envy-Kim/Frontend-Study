<template>
  <div>
    <main-layout>
      <div class="content">
        <h1>Vue Study</h1>
        <ul>
          <li>Vuejs 설치 및 프로젝트 생성</li>
          <li>Vue Route</li>
          <li>Custom Input Component</li>
          <li>Dynamic Component</li>
        </ul>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "@/components/layouts/main/Index"

export default {
  name: "Main",
  components: { MainLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px auto 350px;
}
</style>