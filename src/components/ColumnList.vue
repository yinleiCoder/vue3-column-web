<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img :src="column.avatar" :alt="column.title" class=" border border-light mb-2">
                    <h5 class="card-title">{{column.title}}</h5>
                    <p class="card-text text-left">{{column.description}}</p>
                    <a href="#" class="btn btn-outline-primary">Enter zzcolumn.</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
// 专栏列表
export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
        type: Array as PropType<ColumnProps[]>,
        required: true
        }
    },
    setup(props) {
        const columnList = computed(()=> {
            return props.list.map(column => {
                if(!column.avatar) {
                    column.avatar = require('@/assets/column.jpg')
                }
                return column
            })
        });
        return {
            columnList
        };
    }
})
</script>

<style scoped>
img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>