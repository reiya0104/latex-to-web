<template>
  <div class="about">
    <h1>This is About page</h1>
  </div>
  <p>$a$ \[a\]</p>
  <div>
    <p ref="renderKatex">aaaa</p>
  </div>
  <div>
    <Parent/>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Parent from "@/components/Parent.vue";
import katex from "katex";

// let element = document.getElementById("render-katex");
// console.log(`element = ${element}`);
// katex.render("c = \\pm\\sqrt{a^2 + b^2}", element, {
//     throwOnError: false
// });

export default {
  name: "About",
  components: {
    Parent
  },
  setup() {
    const renderKatex = ref<HTMLElement>()

    console.log(renderKatex.value) // undefined

    onMounted(() => {
      console.log(renderKatex.value) // <p>aaaa</p>
      katex.render("c = \\pm\\sqrt{a^2 + b^2}", renderKatex.value, {
        throwOnError: false
      });
    })

    return { renderKatex }
  }
};
</script>

