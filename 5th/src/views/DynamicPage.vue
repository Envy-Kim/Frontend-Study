<template>
  <div class="container">
    <h1>동적 컴포넌트</h1>

    <button @click="listType='list'">List</button>
    <button @click="listType='gallery'">Gallery</button>
    <button @click="listType='webzine'">Webzine</button>
    <keep-alive>
    <vue-board :columns="listColumns" :items="listItems" :bbs-type="listType" :mode="1"></vue-board>
    </keep-alive>
  </div>
</template>

<script>
import VueBoard from '@/components/board/Index'

export default {
  name: "index",
  components: {VueBoard},
  data() {
    return {
      listType: 'list', // list(table), gallery, webzine
      listColumns: [
        {
          label: '번호',
          value: 'idx',
        },
        {
          label: '제목',
          value: 'subject',
        },
        {
          label: '조회수',
          value: 'hit',
        },
        {
          label: '글쓴이',
          value: 'author',
        },
        {
          label: '작성일',
          value: 'created_at',
        },
      ],
      listItems: [
        {
          idx: 1,
          subject: '집게리아죠?',
          content: '아뇨, 뚱인데요.',
          image: require('@/assets/images/image1.jpg'),
          hit: 1,
          author: '뚱이',
          created_at: '2021-04-05 10:42:24',
        },
        {
          idx: 2,
          subject: '스파이더맨 3 빨리 개봉 좀..',
          content: '어둠의 댄서랑 가필드랑 토미의 스파이더맨 트리오 보고 싶다.',
          image: require('@/assets/images/image2.jpg'),
          hit: 5,
          author: 'marvel',
          created_at: '2021-04-05 10:50:24',
        },
        {
          idx: 3,
          subject: '제목1',
          content: '내용1',
          image: '',
          hit: 1,
          author: '글쓴이1',
          created_at: '2021-04-05 10:42:24',
        },
        {
          idx: 4,
          subject: '제목1',
          content: '내용1',
          image: '',
          hit: 1,
          author: '글쓴이1',
          created_at: '2021-04-05 10:42:24',
        },
        {
          idx: 5,
          subject: '제목1',
          content: '내용1',
          image: '',
          hit: 1,
          author: '글쓴이1',
          created_at: '2021-04-05 10:42:24',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>