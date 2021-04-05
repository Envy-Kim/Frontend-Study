<!--
todo: v-model 과 component의 model 확인
todo: 다중 선택일때는 array, 아닐때는 boolean을 리턴하는 것에 대한 검토
-->
<template>
  <div>
    <input type="checkbox"
           :id="_id"
           :value="inputValue"
           :checked="checked"
           @input="change"
           >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    id: {
      type: String,
    },
    value: { // v-model과 매칭되는 value
      type: [String, Array, Boolean],
    },
    inputValue: { // checkbox에 들어가는 value
      type: String,
    },
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _id: function () {
      return (this.id) ? this.id : 'input-' + this._uid
    },
  },
  methods: {
    change($event) {
      if(this.value instanceof Array) {
        // 다중선택 체크박스인 경우 값을 배열로 반환

        // v-model과 연결된 value(Array)를 checkArr 배열에 할당
        let checkArr = this.value

        // 선택된 체크박스의 값을 checkArr에 push
        if ($event.target.checked) {
          checkArr.push(this.inputValue)
        } else {
          // 선택된 체크박스를 해제한 경우 checkArr에서 현재 체크박스의 값을 삭제
          checkArr.splice(checkArr.indexOf(this.inputValue), 1)
        }
        this.$emit('input', checkArr)
      } else {
        // 다중선택이 아닌경우 true / false 반환
        this.$emit('input', $event.target.checked)
      }
    }
  },
}
</script>

<style scoped>

</style>