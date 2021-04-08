<template>
  <div class="container">
    <h1>동적 컴포넌트</h1>

    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="setListType('list')">List</button>
      <button type="button" class="btn btn-success" @click="setListType('gallery')">Gallery</button>
      <button type="button" class="btn btn-danger" @click="setListType('webzine')">Webzine</button>
    </div>

    <vue-board :columns="listColumns"
               :items="listItems"
               :bbs-type="listType"
               :mode="1"
               v-model="selectedItem"
               @click="modalShow = true"></vue-board>

    <base-modal :show="modalShow" @close="modalShow = false">
      <h5 slot="modal-title">{{ selectedItem.subject }}</h5>

      <div class="modal-info mb-5">
        <span>조회수 : {{ selectedItem.hit }}</span>
        <span class="float-right">{{ selectedItem.created_at }}</span><br/>
        <span class="float-right">글쓴이 : {{ selectedItem.author }}</span>
      </div>

      <img :src="selectedItem.image" class="img-fluid w-100 mb-3">
      <p>{{ selectedItem.content }}</p>
    </base-modal>
  </div>
</template>

<script>
import VueBoard from '@/components/board/Index'
import BaseModal from '@/components/BaseModal'
import {mapState, mapGetters} from 'vuex'

export default {
  name: "DynamicPage",
  components: {VueBoard, BaseModal},
  data() {
    return {
      modalShow: false,
      selectedItem: {},
    }
  },
  computed: {
    //Vuex state 가져오는 방법
    /*listColumns() {
      return this.$store.state.board.listColumns
    },*/

    // mapState를 사용한 방법
    // ...(Spread Operator) state를 전개하여 처리
    ...mapState({
      listColumns: state => state.board.listColumns
      // listItems: state => state.board.listItems,

      // 세부 처리가 필요한 경우 : 동일한 처리를 여러번 해야한다면 modules에서 getter를 만들어서 사용
      /*listItems(state) {
        return state.board.listItems.filter(item => item.hit>=2)
      }*/
    }),

    // getter를 만들어 사용하는 방법
    listItems() {
      return this.$store.getters.getListItems
    },

    // mapGetters를 이용하여 getter를 사용
    ...mapGetters({
      //listItems: 'getListItems'
    }),

    listType: {
      get() {
        return this.$store.state.board.listType
      },
      set(newType) {
        console.log(newType)
        this.$store.dispatch('setListType', newType)
      }
    }
  },
  methods: {
    setListType(type) {
      this.listType = type

      // 변경된 게시판 타입을 localStorage에 저장
      localStorage.setItem('listType', type)
    },
  },
  // 화면이 랜더링 되기전에 설정하기 위하여 created 사용
  created() {
    let localListType = localStorage.getItem('listType')

    if(localListType) {
      this.listType = localListType
    }
  },
  watch: {
    selectedItem: function (item) {
      console.log('change selectedItem')
      ++item.hit
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 5px;
}

.float-right {
  &::after {
    display: block;
    content: '';
    clear: both;
  }
}
</style>