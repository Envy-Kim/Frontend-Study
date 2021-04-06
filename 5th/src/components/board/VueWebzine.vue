<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col mb-4"
         v-for="(item, key) in items" :key="key">
      <div class="card" @click="selectItem(item)">
        <img :src="(item.image) ? item.image : fileIcon" class="card-img-top webzine-img" alt="...">
        <div class="card-body">
          <p class="card-info">
            <span>글쓴이 : {{ item.author }}</span><br/>
            <span class="left">{{ item.created_at }}</span>
            <span class="right">조회 {{ item.hit }}</span>
          </p>
          <h5 class="card-title">{{ item.subject }}</h5>
          <p class="card-text">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueWebzine",
  props: {
    items: {
      type: Array,
      required: true,
    },
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

<style lang="scss" scoped>
.card {
  .webzine-img {
    height: 300px;
    object-fit: cover;
  }

  .card-body {
    .card-info {
      .left {
        float: left;
      }

      .right {
        float: right;
      }

      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }

    .card-text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>