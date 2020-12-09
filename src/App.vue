<template>
  <div class="container">
    <Header :user="currentUser"></Header>
    <!-- <column-list :list="list"></column-list> -->
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 Girl专栏</li>
          <li class="list-inline-item">美女</li>
          <li class="list-inline-item">图集</li>
          <li class="list-inline-item">性感</li>
          <li class="list-inline-item">可爱</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useStore} from 'vuex'
import Header, { UserProps } from './components/Header.vue'
import { GlobalDataProps } from './store'


export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    return {
      currentUser,
    }
  }
})
</script>

<style>

</style>
