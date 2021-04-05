<template>
  <div class="content">
    <h1>동적 컴포넌트</h1>

    <vue-board :tdata="listItems" bbs-type="webzine" :mode="2"></vue-board>


    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import VueBoard from '@/components/board/Index'

export default {
  name: "index",
  components: { VueBoard },
  data() {
    return {
      listType: 'list', // list(table), gallery, webzine
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