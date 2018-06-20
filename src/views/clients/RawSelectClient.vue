<template>
    <select
      :value="selected"
      @input="$emit('input', $event.target.value)">
      <option disabled value="">{{ placeholder }}</option>
      <option
        v-for="opt in options"
        :key="opt._id"
        :value="opt._id">
        {{ opt.name }}
      </option>
    </select>
</template>

<script>
export default {
  name: 'RawSelectClient',

  props: {
    placeholder: { type: String, default: '' }
  },

  data () {
    return {
      selected: '',
      options: [{_id: '1', name: 'foo'}, {_id: '2', name: 'bar'}]
    }
  }
}
</script>
