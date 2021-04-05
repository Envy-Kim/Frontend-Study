<template>
  <div class="nav" role="banner">
    <ul :class="type">
      <li v-for="(item, index) in router" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from '@/router'

export default {
  name: "navigator",
  props: {
    type: {
      type: String,
      default: 'horizontal',
    }
  },
  computed: {
    router: function() {
      return routes
    }
  }
}
</script>

<style scoped>
ul.horizontal {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

ul.horizontal li {
  float: left;
}

ul.horizontal li a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.horizontal li a:hover:not(.router-link-exact-active) {
  background-color: #000;
}

ul.horizontal li a.router-link-exact-active {
  background-color:#4CAF50;
}

ul.horizontal2 {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

ul.horizontal2 li {
  float: left;
}

ul.horizontal2 li a {
  display: inline-block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.horizontal2 li a:hover:not(.router-link-exact-active) {
  background-color: #ddd;
}

ul.horizontal2 a.router-link-exact-active {
  color: white;
  background-color: #4CAF50;
}
.width94 {
  width:94%;
}
@media screen and (max-width: 600px) {
  .width94 {
    width:100%;
  }
}

ul.vertical {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

ul.vertical li a {
  display: block;
  color: #000;
  padding: 8px 0 8px 16px;
  text-decoration: none;
}

ul.vertical li a:hover:not(.router-link-exact-active) {
  background-color: #555;
  color:white;
}

ul.vertical a.router-link-exact-active {
  background-color: #4CAF50;
  color:white;
}

ul.gray {
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

ul.gray li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.gray li a:hover:not(.router-link-exact-active) {
  background-color: #ddd;
}

ul.gray li a.router-link-exact-active {
  color: white;
  background-color: #008CBA;
}
.rightli {
  float:right;
}

@media screen and (max-width: 408px) {
  .rightli {
    display:none;
  }
}

ul.ex {
  width:90%;
}
@media screen and (max-width: 600px) {
  ul.ex {
    width:100%;
  }
}

ul.divider li {
  float: left;
  border-right:1px solid #bbb;
}

ul.divider li:last-child {
  border-right: none;
}
ul.border {
  border: 1px solid #555;
}

ul.border li a {
  padding: 8px 16px;
}

ul.border li {
  text-align: center;
  border-bottom: 1px solid #555;
}

ul.border li:last-child {
  border-bottom: none;
}


</style>