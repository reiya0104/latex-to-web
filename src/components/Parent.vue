<template>
  <div>
    <p>{{ titleComputed }}</p>
  </div>
  <div>
    <p>parent</p>
    <input type="text" v-model="titleComputed" />
    <ChildInput v-model:title="titleComputed" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import ChildInput from '@c/Child.vue'

export default defineComponent({
  name: 'ParentInput',
  components: {
    ChildInput,
  },
  setup() {
    const title = ref('')
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => (title.value = value),
    })

    return {
      titleComputed,
    }
  },
})
</script>
