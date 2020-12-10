import { createStore } from 'vuex'
export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
  }
  export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
  }
  export const testData: ColumnProps[] = [
    {
      id: 1,
      title: 'test1的专栏',
      description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧, 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
      avatar: 'http://a1.qpic.cn/psc?/V139anvb4KccT9/u0qUMsilGdkhXscKj.lHLk3fRBYo6A0EIbtY3aZ.v2vg65yUeDkWBemki1sCt6j6K4qcg87VbCvlx*gUIgqvOg!!/c&ek=1&kp=1&pt=0&bo=mQUcBZkFHAURECc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0'
    },
    {
      id: 2,
      title: 'test2的专栏',
      description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
      avatar: 'http://a1.qpic.cn/psc?/V139anvb4KccT9/u0qUMsilGdkhXscKj.lHLk3fRBYo6A0EIbtY3aZ.v2vg65yUeDkWBemki1sCt6j6K4qcg87VbCvlx*gUIgqvOg!!/c&ek=1&kp=1&pt=0&bo=mQUcBZkFHAURECc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0'
    },
    {
      id: 3,
      title: 'test3的专栏',
      description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
      // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
      id: 4,
      title: 'test4的专栏',
      description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
      avatar: 'http://a1.qpic.cn/psc?/V139anvb4KccT9/u0qUMsilGdkhXscKj.lHLk3fRBYo6A0EIbtY3aZ.v2vg65yUeDkWBemki1sCt6j6K4qcg87VbCvlx*gUIgqvOg!!/c&ek=1&kp=1&pt=0&bo=mQUcBZkFHAURECc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0'
    }
  ]
  
  export const testPosts: PostProps[] = [
    {
      id: 1,
      title: '这是我的第一篇文章',
      content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
      image: 'http://a1.qpic.cn/psc?/V139anvb4KccT9/u0qUMsilGdkhXscKj.lHLk3fRBYo6A0EIbtY3aZ.v2vg65yUeDkWBemki1sCt6j6K4qcg87VbCvlx*gUIgqvOg!!/c&ek=1&kp=1&pt=0&bo=mQUcBZkFHAURECc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0',
      createdAt: '2020-06-11 10:34:22',
      columnId: 1
    },
    {
      id: 2,
      title: '这是我的第二篇文章',
      content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
      createdAt: '2020-06-11 10:34:22',
      columnId: 1
    },
    {
      id: 3,
      title: '这是我的第三篇文章',
      content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
      image: 'http://a1.qpic.cn/psc?/V139anvb4KccT9/u0qUMsilGdkhXscKj.lHLk3fRBYo6A0EIbtY3aZ.v2vg65yUeDkWBemki1sCt6j6K4qcg87VbCvlx*gUIgqvOg!!/c&ek=1&kp=1&pt=0&bo=mQUcBZkFHAURECc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0',
      createdAt: '2020-06-11 10:34:22',
      columnId: 1
    }
  ]
interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
    columnId: number;
}
export interface GlobalDataProps {
    loading: boolean;
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}
const store = createStore<GlobalDataProps>({
    state: {
        loading: false,
        columns: testData,
        posts: testPosts,
        user: {isLogin: true, columnId: 1}
    },
    mutations: {
        login(state) {
            state.user = {...state.user, isLogin: true, name: 'yinlei'}
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        },
        setLoading(state, status) {
          state.loading = status
        }
    },
    actions: {
      fetchColumns(context) {

      }
    },
    getters: {
        biggerColumnLen(state) {
            return store.state.columns.filter(c => c.id > 2).length
        },
        getColumnById: (state) => (id: number) => {
            return state.columns.find(c =>c.id === id)
        },
        getPostsByCid: (state) => (cid: number) => {
            return state.posts.filter(post => post.columnId == cid)
        }
    }
})

export default store