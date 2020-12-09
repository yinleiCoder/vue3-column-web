<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <a href="#" class="navbar-brand">Girl's专栏</a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <dropdown :title="`你好 ${user.name}`">
                    <dropdown-item><a href="#" class="dropdown-item">New article</a></dropdown-item>
                    <dropdown-item :disabled="true"><a href="#" class="dropdown-item">Edit data</a></dropdown-item>
                    <dropdown-item><a href="#" class="dropdown-item">Logout</a></dropdown-item>
                </dropdown>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}

export default {
  components: { Dropdown, DropdownItem },
    name: 'Header',
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true
        }
    }
}
</script>

<style>

</style>