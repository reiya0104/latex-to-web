<template>
  <div class="about">
    <h1>This is About page</h1>
  </div>
  <div>
    <h2>やりたいこと</h2>
    <ul>
      <li>localStorage の導入</li>
      <li>textarea の補完</li>
      <li>簡単なtexファイルからwebページを作成</li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "About",
})
</script>

