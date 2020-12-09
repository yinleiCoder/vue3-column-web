import { onMounted, onUnmounted, Ref, ref } from 'vue'
/**
 * 点击外部区域自动隐藏。
 * 1. 在mounted时候添加click事件，在unmounted时候删除事件
 * 2. 拿到Dropdown的DOM元素判断点击的内容是否被这个元素包含
 */
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {

    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        if(elementRef.value) {
            if(!elementRef.value.contains(e.target as HTMLElement) && isClickOutside.value) {
                isClickOutside.value = false
            }else {
                isClickOutside.value = true
            }
        }
    }
    onMounted(() =>{
        document.addEventListener('click', handler)
    }) 
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })
    return isClickOutside
}
export default useClickOutside;