<template>
  <div class="about">
    <h1>This is About page</h1>
  </div>
  <p>$a$ \[a\]</p>
  <div>
    <Parent/>
  </div>
</template>


<script lang="ts">
import Parent from "@/components/Parent.vue";

export default {
  name: "About",
  components: {
    Parent
  },
};
</script>

