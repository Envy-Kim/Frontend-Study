
export default {
    state: {
        listType: 'list',
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
                hit: 2,
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
                subject: '어둠의 댄서',
                content: '샘 레이미 감독의 스파이더맨 트릴로지에서 춤을 담당하고 있는 어둠의 댄서, 토비 맥과이어. ',
                image: require('@/assets/images/image3.gif'),
                hit: 7,
                author: '스파이디',
                created_at: '2021-04-05 11:42:24',
            },
            {
                idx: 4,
                subject: '동적컴포넌트',
                content: `
                  컴포넌트들을 전환할 때 가끔 성능상의 이유로 상태를 유지하거나 재-렌더링을 피하길 원할 수 있습니다.
                  동적 컴포넌트를 재생성하는 것은 보통은 유용한 동작입니다. 하지만 이 경우에는, 탭 컴포넌트 인스턴스가 처음 생성될 때 캐시 되는 것을 선호합니다.
                  이런 문제를 해결하기 위해서, 동적 컴포넌트를 <keep-alive> 엘리먼트로 둘러쌀 수 있습니다.
                  `,
                image: require('@/assets/logo.png'),
                hit: 3,
                author: 'Vue',
                created_at: '2021-04-05 17:42:24',
            },
            {
                idx: 5,
                subject: '제목2',
                content: '내용없음',
                image: '',
                hit: 1,
                author: '글쓴이2',
                created_at: '2021-04-05 18:30:24',
            },
        ]
    },
    getters: {
        getListItems: state => state.listItems.filter(item => item.hit>=2)
    },
    mutations: {
        setListType(state, type) {
            state.listType = type
        }
    },
    actions: {
        setListType({commit}, type) {
            commit('setListType', type)
        }
    },
}