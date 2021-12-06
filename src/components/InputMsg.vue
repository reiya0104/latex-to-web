<template>
  <KatexMsg :msg="msg" />
  <textarea class="w-1/2 bg-gray-50 border rounded" type="text" v-model="msgComputed" />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import KatexMsg from '@c/KatexMsg.vue'

export default defineComponent({
  name: "InputMsg",
  components: {
    KatexMsg,
  },
  setup() {
    const msg = ref('')
    const msgComputed = computed({
      get: () => msg.value,
      set: (value) => msg.value = value,
    })

    return { msg, msgComputed }
  }
})
</script>
