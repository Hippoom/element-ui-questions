<template>
    <select
            :value="clientId"
            @input="$emit('input', $event.target.value)">
        <option value="1">Foo</option>
        <option value="2">Bar</option>
    </select>
</template>
<script>
    export default {
        props: {
            clientId: {
                type: String,
                required: true
            }
        }
    }
</script>