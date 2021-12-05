<template>
<div>
  <Parent2/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parent2 from '@c/Parent2.vue'

export default defineComponent({
  name: "Family2",
  components: {
    Parent2,
  }
})
</script>
