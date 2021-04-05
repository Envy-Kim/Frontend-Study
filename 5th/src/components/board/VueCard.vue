<template>
  <div>
    card<br/>
    {{tdata.content}}<br/>
    {{tdata.subject}}<br/>
  </div>
</template>

<script>
export default {
  name: "VueCard",
  props: {
    tdata: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>