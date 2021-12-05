<template>
  <div>
    <p>Parent2</p>
    <div>
      <p>{{ titleComputed }}</p>
      <input v-model="titleComputed"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: "Parent2",
  setup() {
    const title = ref('This is title ref')
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => title.value = value
    })

    return {
      titleComputed
    }
  }
})

</script>
