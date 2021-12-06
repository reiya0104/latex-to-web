<template>
<div>
  <Parent2/>
</div>
<div>
  <KatexMsg msg="a^2 + b^2 + c^2 = 1"/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parent2 from '@c/Parent2.vue'
import KatexMsg from '@c/KatexMsg.vue'

export default defineComponent({
  name: "Family2",
  components: {
    Parent2,
    KatexMsg,
  }
})
</script>
