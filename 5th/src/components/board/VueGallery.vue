<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col mb-4"
         v-for="(item, key) in items" :key="key">
      <div class="card text-white" @click="selectItem(item)">
        <img :src="(item.image) ? item.image : fileIcon" class="card-img-top" alt="...">
        <div class="img-cover"></div>
        <div class="card-body">
          <h4 class="card-title">{{ item.subject }}</h4>
          <p class="card-info">
            <span>글쓴이 : {{ item.author }}</span><br/>
            <span class="left">{{ item.created_at }}</span>
            <span class="right">조회 {{ item.hit }}</span>
          </p>
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
  name: "VueGallery",
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
  position: relative;
  border: none;

  .card-img-top {
    border-radius: 20px;
  }

  .card-body {
    position: absolute;
    display: none;
    z-index: 1;

    .card-title {
      font-weight: bold;
    }

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

  .img-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 20px;
  }


  &:hover {
    .img-cover {
      background-color: rgba(0, 0, 0, 0.4);
    }

    .card-body {
      display: block;
    }
  }
}
</style>