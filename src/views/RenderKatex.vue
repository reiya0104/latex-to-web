<template>
<InputMsg/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputMsg from '@c/InputMsg.vue'

export default defineComponent({
  name: "RenderKatex",
  components: {
    InputMsg,
  }
})
</script>
