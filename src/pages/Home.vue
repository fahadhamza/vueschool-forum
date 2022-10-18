<script setup>
import ThreadList from "@/components/ThreadList.vue";

import data from "@/data.json";
const threads = data.threads
</script>
<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

