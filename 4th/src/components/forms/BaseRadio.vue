<template>
  <div class="radio-item">
    <input type="radio"
           :id="_id"
           :name="_name"
           :value="value"
           :checked="checked" >
    <label :for="_id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseRadio",
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
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
    _id: function() {
      return (this.id) ? this.id : 'input-' + this._uid
    },
    _name: function() {
      // name을 입력받지 않은 경우 부모(vRadioGroup)의 radioName을 name으로 설정
      return (this.name) ? this.name : this.$parent.radioName
    },
  },
}
</script>

<style lang="scss" scoped>
</style>