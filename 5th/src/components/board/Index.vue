<template>
  <div class="board-wrap">
    <keep-alive>
      <!-- :is 를 이용한 동적 컴포넌트 -->
      <div v-if="mode === 1">
        <component :is="viewComponent"
                   :columns="columns"
                   :items="items"
                   v-model="$attrs.value"
                   @input="$emit('input', $attrs.value)"
                   @click="$emit('click')" ></component>
        <!--
        $attrs
        props로 인식(및 추출)되지 않는 부모 범위 속성 바인딩.
        컴포넌트에 선언된 props가 없을 때 class와 style을 제외하고 모든 부모 범위 바인딩을 기본적으로 포함하며
        v-bind="$attrs"를 통해 내부 컴포넌트로 전달할 수 있다. - 하이 오더 컴포넌트(HOC)를 작성할 때 유용합니다.
        -->
      </div>

      <!-- v-if/else 를 이용한 컴포넌트 변경 -->
      <div v-else>
        <vue-table v-if="bbsType === 'list'"
                   :columns="columns"
                   :items="items"
                   v-model="selectItem"
                   @input="$emit('input', selectItem)"
                   @click="$emit('click')" >
        </vue-table>

        <vue-gallery v-else-if="bbsType === 'gallery'"
                     :items="items"
                     v-model="selectItem"
                     @input="$emit('input', selectItem)"
                     @click="$emit('click')" >
        </vue-gallery>

        <vue-webzine v-else
                     :items="items"
                     v-model="selectItem"
                     @input="$emit('input', selectItem)"
                     @click="$emit('click')" >
        </vue-webzine>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import VueTable from "./VueTable";
import VueGallery from "./VueGallery";
import VueWebzine from "./VueWebzine";

export default {
  name: "BoardIndex",
  components: { VueTable, VueGallery, VueWebzine },
  props: {
    mode: {
      type: Number,
      default: 1,
    },
    bbsType: {
      type: String,
      default: 'list',
      validator(value) {
        // 값이 항상 아래 세 개의 문자열 중 하나여야 합니다.
        return ['list', 'gallery', 'webzine'].indexOf(value) !== -1
      },
    },
    items: {
      type: Array,
      required: true,
      validator: (list => list.length >0),
    },
    columns: {
      type: Array,
      required: true,
      validator: (list => list.length >0),
    },
    value: {
      type: Object,
    }
  },
  computed: {
    viewComponent: function () {
      let view = VueTable

      if (this.bbsType === 'gallery')
        view = VueGallery
      else if (this.bbsType === 'webzine')
        view = VueWebzine

      return view
    },
  },
  data() {
    return {
      selectItem: (this.value) ? (this.value) : {}
    }
  }
}
</script>

<style scoped>

</style>