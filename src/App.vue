<template>
  <div id="app">
    <el-form :inline="true" :model="filterForm" class="demo-form-inline">
      <el-form-item label="Raw Client">
        <raw-select-client
          v-model="filterForm.rawSelectClientId"
          placeholder="Select something"/>
      </el-form-item>

      <el-form-item label="El Client in component">
        <select-client
          v-model="filterForm.selectClientId"/>
      </el-form-item>

      <el-form-item label="El Client">
        <el-select
          v-model="filterForm.clientId"
          placeholder="Filter by short name"
          :filterable="true"
          :remote="true"
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

    {{ filterForm }}
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import RawSelectClient from './views/clients/RawSelectClient'
import SelectClient from './views/clients/SelectClient'

export default {
  name: 'app',

  components: { RawSelectClient, SelectClient },

  data () {
    return {
      filterForm: {
        rawSelectClientId: '',
        selectClientId: '',
        clientId: ''
      },
      clients: [],
      loading: false
    }
  },

  methods: {
    filter () {
      console.log('filter', this.filterForm)
    },

    filterClients (query) {
      console.log('filterClients', query)
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.clients = [{_id: '1', name: 'foo'}, {_id: '2', name: 'bar'}]
        }, 200)
      } else {
        this.clients = []
      }
    }
  }
}
</script>

<style>
</style>
