<template>
  <a
      :href="href"
      :class="{ active: isActive }"
      @click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
import router from '../router.js';

export default {
  name: "VLink",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(
          null,
          router[this.href],
          this.href
      )
    }
  }
}
</script>

<style scoped>

</style>