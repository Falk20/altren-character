<template>
  <v-container class="h-100">
    <CharacterList v-if="isAuth" />
    <LoginButton v-else />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "@/components/widgets/login-button/index.vue";
import CharacterList from "@/components/widgets/character-list/index.vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("app/auth");

export default defineComponent({
  name: "StartView",

  components: {
    LoginButton,
    CharacterList,
  },

  computed: {
    ...mapGetters(["isAuth"]),
  },
});
</script>
