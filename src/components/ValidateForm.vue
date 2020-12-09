<template>
    <form action="" class="validate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import mitt, { Emitter } from 'mitt'
export const emitter: Emitter = mitt() // 监听器

type ValidateFunc = () => boolean

export default defineComponent({
    /**
     * 自定义Form组件：
     * 1. 提交按钮有默认值，也可以自定义(具名插槽)
     * 2. 当提交完毕触发特定事件供用户做下一步处理
     * 3. 验证包裹的ValidateInput组件的结果
     */
    emits: ['form-submit'],
    setup(props, context) {
        let funcArr: ValidateFunc[] = []
        const submitForm = () => {
            const result = funcArr.map(func => func()).every(result => result)
            context.emit('form-submit', result)
        }
        const callback = (func?: ValidateFunc) => {
            if(func) {
                funcArr.push(func)
            }
        }
        emitter.on('form-item-created', callback)
        onUnmounted(() => {
            emitter.off('form-item-created', callback)
            funcArr = []
        })
        return {
            submitForm,
        }
    },
})
</script>

<style>

</style>