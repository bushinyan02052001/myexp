<template>
    <span style="color: red">Hello world</span>
    <Link :href="$route('dashboard')">Go to Dashboard</Link>
</template>
<script>
import Layout from '../Share/Layout.vue';

export default {
    name: "Index",
    layout: Layout
}
</script>
<script setup>
console.log(route)
</script>
