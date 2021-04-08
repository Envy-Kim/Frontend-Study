import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 작성한 모듈을 가져온다.
import board from '@/store/board'

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        // 키: 값 형태로 저장
        board: board,
    }
})
