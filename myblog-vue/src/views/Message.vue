<template>
  <div>
    <explain />
    <message-input />
    <show-message />
  </div>
</template>

<script>
import Explain from "@/components/message/Explain.vue";
import MessageInput from "@/components/message/MessageInput.vue";
import ShowMessage from "@/components/message/ShowMessage.vue";
export default {
  components: {
    MessageInput,
    Explain,
    ShowMessage,
  },
};
</script>