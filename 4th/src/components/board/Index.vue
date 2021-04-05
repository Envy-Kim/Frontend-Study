<template>
  <div class="board-wrap">
    <!--
    todo: keep-alive의 위치는 이곳이 맞는가? 부모인 DynamicPage에 있어야하는 것인가?
    -->
    <keep-alive>
      <!-- :is 를 이용한 동적 컴포넌트 -->
      <div v-if="mode === 1">
        <component :is="viewComponent" :tdata="tdata"></component>
      </div>

      <!-- v-if/else 를 이용한 컴포넌트 변경 -->
      <div v-else>
        <div v-if="bbsType === 'list'">
          List
        </div>
        <div v-else-if="bbsType === 'gallery'">
          Gallery
        </div>
        <div v-else>
          Webzine
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import VueListItem from "@/components/board/VueListItem";
import VueCard from "@/components/board/VueCard";

export default {
  name: "BBSIndex",
  props: {
    mode: {
      type: Number,
      default: 1,
    },
    bbsType: {
      type: String,
      default: 'list',
    },
    tdata: {
      type: Object
    }
  },
  computed: {
    viewComponent: function () {
      let view = VueListItem

      if (this.bbsType === 'gallery')
        view = VueCard
      else if (this.bbsType === 'webzine')
        view = VueCard

      return view
    },
  }
}
</script>

<style scoped>

</style>