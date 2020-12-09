<template>
  <div class="container">
    <Header :user="currentUser"></Header>
    <!-- <column-list :list="list"></column-list> -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">Email:</label>
        <validate-input 
          type="text"
          placeholder="input your email address."
          :rules="emailRules" 
          v-model="emailVal"
          ref="inputRef"
          ></validate-input>
        {{emailVal}}
      </div>
      <div class="mb-3">
        <label class="form-label">Password:</label>
        <validate-input
          type="password"
          placeholder="input your email address."
          :rules="passwordRules" 
          v-model="passwordVal"></validate-input>
        {{passwordVal}}
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import Header, { UserProps } from './components/Header.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'

const currentUser: UserProps = {
  isLogin: true,
  // isLogin: false
  name: 'yinlei'
}

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
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    Header,
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const inputRef = ref<any>()
    const emailVal = ref('1099129793@163.com')
    const emailRules: RulesProp = [
      {type: 'required', message: 'email can not be empty!'},
      {type: 'email', message: 'email is not valid!'}
    ]
    const passwordVal = ref('123')
    const passwordRules: RulesProp = [
      {type: 'required', message: 'password can not be empty!'}
    ]
    const onFormSubmit = (result: boolean) => {
      // console.log('result', inputRef.value.validateInput())
      console.log('result', result)
    }
    return {
      list: testData,
      currentUser,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
      inputRef,
    }
  }
})
</script>

<style>

</style>
