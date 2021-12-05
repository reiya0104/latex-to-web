<template>
  <div>
    <p>Parent2</p>
    <div>
      <div>
        <p class="inline-block p-2 bg-gray-100">
          renderKatex
          <p class="bg-red-100">
            <span ref="renderKatex"></span>
          </p>
        </p>
      </div>
      <input v-model="titleComputed" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import katex from 'katex'

const spaceCheck = (text: string): boolean => {
  return (!text || !text.match(/\S/g));
}

export default defineComponent({
  name: "Parent2",
  setup() {
    const renderKatex = ref<HTMLElement>()
    const title = ref('\\int_0^1 x \\, dx = \\frac 1 2')

    const renderKatexByValue = (value: string): void => {
      const renderText = !spaceCheck(value) ? value : '\\hspace*{0pt}'
      console.log(`renderText = ${renderText}`);
      if (renderKatex.value != undefined) {
        katex.render(renderText, renderKatex.value, {
          throwOnError: false,
          displayMode: true,
          strict: false,
          trust: (context) => ["\\htmlClass"].includes(context.command),
        });
      }
    }

    const titleComputed = computed({
      get: () => title.value,
      set: (value) => {
        title.value = value;
        renderKatexByValue(title.value)
      }
    })


    onMounted(() => {
      renderKatexByValue(title.value)
    })

    return {
      titleComputed,
      renderKatex,
    }
  }
})

</script>
