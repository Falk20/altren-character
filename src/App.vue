<template>
  <v-app>
    <AltNavbar />

    <AltSideMenu />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AltNavbar from "@/components/navbar/index.vue";
import AltSideMenu from "@/components/side-menu/index.vue";

export default defineComponent({
  name: "App",

  components: {
    AltNavbar,
    AltSideMenu,
  },

  data() {
    return {
      //
    };
  },
});
</script>
