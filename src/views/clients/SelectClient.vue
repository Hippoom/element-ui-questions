<template>
  <!-- <el-select
    v-bind:value="clientId"
    @input="$emit('input', $event)"
    placeholder="Filter by short name"
    filterable="true"
    remote="true"
    :remote-method="filter"
    :loading="loading">
    <el-option
      v-for="item in clients"
      :key="item._id"
      :label="item.name"
      :value="item._id">
    </el-option>
  </el-select> -->

  <el-select
    :value="selected"
    @input="dispatch"
    placeholder="Filter by short name"
    :filterable="true"
    :remote="true"
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
  name: 'SelectClient',

  data() {
    return {
      selected: '',
      clients: [],
      loading: false,
    }
  },

  methods: {
    filter(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false
          this.clients = [{_id: '1', name: 'foo'}, {_id: '2', name: 'bar'}]
        }, 200)
      } else {
        this.clients = []
      }
    },

    dispatch (e) {
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
