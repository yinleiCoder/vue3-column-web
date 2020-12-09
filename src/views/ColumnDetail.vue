<template>
    <div class="column-detail-page w-75 mx-auto">
        <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
        <div class="col-3 text-center">
            <img :src="column.avatar" :alt="column.title" class="border w-100">
        </div>
        <div class="col-9">
            <h4>{{column.title}}</h4>
            <p class="text-muted">{{column.description}}</p>
        </div>
        </div>
        <post-list :list="list"></post-list>
    </div>
</template>

<script lang="ts">
import PostList from '@/components/PostList.vue'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
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

export default defineComponent({
    components: {
        PostList,
    },
    setup() {
        const route = useRoute() //获取路由信息
        const currentId = +route.params.id 
        const column = testData.find(c =>c.id === currentId)
        const list = testPosts.filter(post => post.columnId === currentId)
        return {
            column,
            list,
        }
    }
})
</script>

<style>

</style>