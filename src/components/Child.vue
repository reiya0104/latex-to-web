<template>
  <div>
    <p>child</p>
    <input type="text" v-model="titleComputed" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'
export default defineComponent({
  name: 'ChildInput',
  // components: {
  //   GrandChild,
  // },
  props: {
    title: String,
  },
  emits: ['update:title'],
  setup(props, { emit }) {
    const { title } = toRefs(props)
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => {
        emit('update:title', value)
      },
    })

    return {
      titleComputed,
    }
  },
})
</script>
