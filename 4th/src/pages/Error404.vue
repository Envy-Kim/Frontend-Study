<template>
  <div class="error-404">
    <h1>Error 404</h1>
    <p>The page you are looking for does not exist..</p>
  </div>
</template>

<script>
export default {
  name: "Error404"
}
</script>

<style lang="scss" scoped>

* {
  transition: all 0.6s;
}

.error-404 {
  position: absolute;
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #888;
  margin: auto;

  h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
  }
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }
  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>