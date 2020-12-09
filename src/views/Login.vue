<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">Login</h5>
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
        {{ emailVal }}
      </div>
      <div class="mb-3">
        <label class="form-label">Password:</label>
        <validate-input
          type="password"
          placeholder="input your email address."
          :rules="passwordRules"
          v-model="passwordVal"
        ></validate-input>
        {{ passwordVal }}
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import ValidateForm from "@/components/ValidateForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const emailVal = ref('1099129793@163.com')
    const router = useRouter();
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
      if(result){
          router.push({name: 'column', params: {id: 1}})
      }
    }
    return {
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
    };
  },
});
</script>
