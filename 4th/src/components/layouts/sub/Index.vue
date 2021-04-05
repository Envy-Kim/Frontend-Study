<template>
  <div>
    <sub-header/>
    <sub-navigator/>
    <slot/>
    <sub-footer/>
  </div>
</template>


<script>
import SubHeader from "@/components/layouts/sub/Header"
import SubNavigator from "@/components/layouts/sub/Navigator"
import SubFooter from "@/components/layouts/sub/Footer"

export default {
  name: "SubLayout",
  components: {
    SubHeader, SubNavigator, SubFooter
  }
}
</script>

<style scoped>

</style>