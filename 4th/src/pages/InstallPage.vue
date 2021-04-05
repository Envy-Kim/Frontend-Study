<template>
  <div>
    <sub-layout>
      <div class="content">
        <h1>Install Vuejs</h1>

        <span>설치 중 오류 발생시</span>
        <ol>
          <li>관리자 권한으로 power shell 실행</li>
          <li>Get-ExecutionPolicy 명령어를 입력하면 권한 상태가 보여짐</li>
          <li>RemoteSigned의 권한이 아니라면 Set-ExecutionPolicy RemoteSigned 입력</li>
          <li>변경하시겠습니까? Y</li>
          <li>2번 내용 다시 입력하여 RemoteSigned으로 변경된 것을 확인 후 다시 설치 진행</li>
        </ol>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/Index"

export default {
  name: "Install",
  components: {SubLayout},
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>