<template>
  <KatexMsg :msg="msg" />
  <div class="w-2/3 lg:w-1/2 mx-auto">
    <div class="float-right block">
      <transition name="fade">
        <p class="inline-block mx-3 bg-green-200 text-green-800 px-2 py-2 my-1 rounded" v-if="show">Copy Successed!</p>
      </transition>
      <button @click="copy" class="msg-button inline-block my-2">Copy</button>
    </div>
    <textarea
      class="w-full bg-gray-50 border rounded p-2"
      type="text"
      placeholder="a^2 + b^2 = c^2"
      rows="5"
      v-model="msgComputed"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import KatexMsg from '@c/KatexMsg.vue'
import useClipboard from 'vue-clipboard3'

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
    const { toClipboard } = useClipboard()

    const show = ref(false)

    const copy = async () => {
      try {
        await toClipboard(msg.value)
        console.log('Copied to clipboard')
        show.value = !show.value
        setTimeout(() => {
          show.value = false;
        }, 1)
      } catch (e) {
        console.error(e)
        show.value = false
      }
    }

    return { msg, msgComputed, copy, show }
  }
})
</script>

<style>
.msg-button {
  @apply px-2;
  @apply bg-indigo-400;
  @apply text-white;
  @apply border-indigo-500;
  @apply hover:bg-indigo-500;
  @apply duration-500;
}

.fade-leave-active {
  transition: opacity 2s;
}
.fade-leave {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
