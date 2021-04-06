<template>
  <table class="table table-hover">
    <thead>
    <tr class="table-primary">
      <th scope="col"
          v-for="(column, key) in columns" :key="key"
      >{{column.label}}</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(item, key) in items" :key="key">
      <th :scope="(index === 0) ? 'row' : ''"
          v-for="(column, index) in columns" :key="index"
          @click="selectItem(item)">{{ item[column.value] }}
        <img v-if="(column.value === 'subject' && item.image !== '')"
             :src="fileIcon"
             class="file-icon">
      </th>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "VueTabe",
  props: {
    items: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      fileIcon: require('@/assets/images/image_icon.png')
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('click')
      this.$emit('input', item)
    }
  }
}
</script>

<style scoped>
.file-icon {
  width: 16px;
  margin-left: 10px;
}
</style>