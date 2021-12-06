<template>
  <div>
    <div class="inline-block bg-gray-100 px-3 my-2">
      <p ref="renderKatex"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, toRefs, watch } from 'vue'
import katex from 'katex'
import { spaceCheck } from '@u/functions'

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
        const renderText = !spaceCheck(msg.value)
          ? msg.value : "a^2 + b^2 = c^2"
        katex.render(renderText, renderKatex.value, {
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


