<template>
  <div class='radio-group' :class="type" @input="setVal">
    <legend>{{label}}</legend>
    <slot  />
  </div>
</template>

<script>
export default {
  name: "BaseRadioGroup",
  props: {
    id: {
      type: String
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'rows'
    },
  },
  computed: {
    _id: function() {
      return (this.id) ? this.id : 'input-' + this._uid
    },
    radioName: function() {
      return (this.name) ? this.name : this._id
    }
  },
  methods: {
    setVal($event) {
      this.$emit('input', $event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
 .radio-group.rows {
   display: flex;
   align-items: center;
 }
</style>