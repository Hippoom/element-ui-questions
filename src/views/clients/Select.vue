<template>
    <el-select
            v-bind:value="value"
            @input="$emit('input', $event)"
            placeholder="Filter by short name"
            filterable
            remote
            :remote-method="filter"
            :loading="loading">
        <el-option
                v-for="item in clients"
                :key="item._id"
                :label="item.name"
                :value="item._id">
        </el-option>
    </el-select>
</template>
<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                clients: [],
                loading: false,
            }
        },
        methods: {
            filter(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.clients = [{_id: '1', name: 'foo'}, {_id: '2', name: 'bar'}];
                    }, 200);
                } else {
                    this.clients = [];
                }
            }
        }
    }
</script>
