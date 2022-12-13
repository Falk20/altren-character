<template>
  <v-app>
    <AltNavbar />

    <AltSideMenu v-if="isAuth" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AltNavbar from "@/components/navbar/index.vue";
import AltSideMenu from "@/components/side-menu/index.vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("app/auth");

export default defineComponent({
  name: "App",

  components: {
    AltNavbar,
    AltSideMenu,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isAuth"]),
  },
});
</script>
