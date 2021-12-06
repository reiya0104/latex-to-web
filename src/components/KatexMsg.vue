<template>
  <div class="bg-gray-100">
    <p ref="renderKatex"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, toRefs, watch } from 'vue'
import katex from 'katex'

export default defineComponent({
  name: "KatexMsg",
  props: {
    msg: String,
  },
  setup(props) {
    const { msg } = toRefs(props)
    const renderKatex = ref<HTMLElement>()

    const renderKatexByMsg = (): void => {
      // const renderText = !spaceCheck(value) ? value : '\\hspace*{0pt}'
      // console.log(`renderText = ${renderText}`);
      if (renderKatex.value != undefined && msg.value != undefined) {
        katex.render(msg.value, renderKatex.value, {
          throwOnError: false,
          displayMode: true,
        })
      }
    }

    onMounted(() => {
      renderKatexByMsg()
    })

    watch(msg, () => {
      renderKatexByMsg()
    })

    return {
      renderKatex,
    }
  }
})
</script>


