<template>
  <div>
    <sub-layout>
      <div class="content">
        <h1>동적 컴포넌트</h1>

        <!--
        처음에는 이곳에 board/Index의 내용을 넣으려했으나
        예제를 보고 그 자체를 하나의 컴포넌트로 만들어 진행
        -->
        <vue-board :tdata="testData" bbs-type="webzine" :mode="2"></vue-board>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/Index"
import VueBoard from "@/components/board/Index";

export default {
  name: "DynamicPage",
  components: { SubLayout, VueBoard },
  data() {
    return {
      testData: {
        name: 'test1',
        subject: '제목제목',
        content: '내용내용내용',
      }
    }
  }
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>