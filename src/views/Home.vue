<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
    <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
       @click="loadMorePage" v-if="!isLastPage"
    >
      加载更多
    </button>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import ColumnList from '@/components/ColumnList.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '胡馨文1',
    description: '这是美女专栏，我我我我好喜欢她啊啊啊啊',
    avatar: 'http://a1.qpic.cn/psc?/V139anvb4KccT9/u0qUMsilGdkhXscKj.lHLk3fRBYo6A0EIbtY3aZ.v2vg65yUeDkWBemki1sCt6j6K4qcg87VbCvlx*gUIgqvOg!!/c&ek=1&kp=1&pt=0&bo=mQUcBZkFHAURECc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0'
  },
  {
    id: 2,
    title: '胡馨文2',
    description: '这是美女专栏',
    avatar: 'http://a1.qpic.cn/psc?/V139anvb4KccT9/u0qUMsilGdkhXscKj.lHLiLxxkhW0UDzK.8B1Ouv4ejbWbrB0gnJhFRL7d6KB9kQLMcFBQvZJWFQ1MdFh2JkFg!!/c&ek=1&kp=1&pt=0&bo=9QX1BfUF9QURECc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0'
  },
  {
    id: 3,
    title: '胡馨文3',
    description: '这是美女专栏',
    // avatar: 'http://a1.qpic.cn/psb?/V139anvb4KccT9/ZQk509jacnVli6ySOSJbZXXVkUDvFuE4jL4KoyM1Or8!/m/dNwAAAAAAAAA&ek=1&kp=1&pt=0&bo=oAWgBaAFoAURIBc!&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-4-3&rf=0-0'
  },
  {
    id: 4,
    title: '胡馨文4',
    description: '这是美女专栏',
    avatar: 'http://a1.qpic.cn/psb?/V139anvb4KccT9/BnFefdsF*lpKG9gWndTOk45I8qg.ei8ecYY9.Unbzzw!/c/dPQAAAAAAAAA&ek=1&kp=1&pt=0&t=5&tl=3&vuin=1099129793&tm=1607389200&sce=60-2-2&rf=0-0'
  },
]

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData,
    }
  }
})
</script>
