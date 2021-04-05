<template>
  <div>
    <main-header class="ml-300" />
    <main-navigator/>
    <slot class="ml-300" />
    <main-footer class="ml-300" />
  </div>
</template>


<script>
import MainHeader from "@/components/layouts/main/Header"
import MainNavigator from "@/components/layouts/main/Navigator"
import MainFooter from "@/components/layouts/main/Footer"

export default {
  name: "MainLayout",
  components: {
    MainHeader, MainNavigator, MainFooter
  }
}
</script>

<style scoped>
  .ml-300 { margin-left: 350px }
</style>