<template>
    <el-container direction="vertical">
        <el-form :inline="true" :model="filterForm" class="demo-form-inline">
            <el-form-item label="Raw Client">
                <raw-select-client v-model="filterForm.clientId"></raw-select-client>
            </el-form-item>
            <el-form-item label="El Client in component">
                <select-client v-model="filterForm.elClientId"></select-client>
            </el-form-item>
            <el-form-item label="El Client">
                <el-select
                        v-model="filterForm.elClientId1"
                        placeholder="Filter by short name"
                        filterable="true"
                        remote="true"
                        :remote-method="filterClients"
                        :loading="loading">
                    <el-option
                            v-for="item in clients"
                            :key="item._id"
                            :label="item.name"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="filter">Filter</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="contents"
                  style="width: 100%">
            <el-table-column
                    prop="number"
                    label="Number" width="120px">
            </el-table-column>
            <el-table-column
                    prop="_embedded.client.name"
                    label="Client">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="Operations"
                    width="120">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
    </el-container>
</template>
<style>
</style>
<script>
    import SelectClient from './views/clients/Select.vue';
    import RawSelectClient from './views/clients/RawSelect.vue';

    export default {
        data() {
            return {
                contents: [{
                    number: '1231',
                    _embedded: {
                        client: {
                            name: 'Foo'
                        }
                    },
                    _links: {
                        self: {
                            href: '111'
                        }
                    }
                }],
                filterForm: {
                    number: '',
                    clientId: '',
                    elClientId: '',
                    elClientId1: ''
                },
                clients: [],
                loading: false,
            }
        },
        methods: {
            filter() {
                console.log(this.$data.filterForm)
            },
            filterClients(query) {
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
        },
        components: {
            'select-client': SelectClient,
            'raw-select-client': RawSelectClient
        }
    }
</script>