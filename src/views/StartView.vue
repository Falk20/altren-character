<template>
  <v-container>
    <LoginButton v-if="!isAuth" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "@/components/widgets/login-button/index.vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("app/auth");

export default defineComponent({
  name: "StartView",

  components: {
    LoginButton,
  },

  computed: {
    ...mapGetters(["isAuth"]),
  },
});
</script>
