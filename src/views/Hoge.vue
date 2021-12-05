<template>
  <h1>This is Hoge page!</h1>
  <div>
    <Parent/>
  </div>
</template>

<script lang="ts">
import Parent from "@c/Parent.vue";
import katex from "katex";

export default {
  name: "Hoge",
  components: {
    Parent
  }
}
</script>
