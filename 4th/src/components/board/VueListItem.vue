<template>
  <div>
    list item<br/>
    {{tdata.name}}<br/>
    {{tdata.subject}}<br/>
    {{tdata.content}}<br/>
  </div>
</template>

<script>
export default {
  name: "VueListItem",
  props: {
    tdata: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>