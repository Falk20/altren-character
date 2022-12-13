<template>
  <v-app-bar color="primary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        v-if="isAuth"
        @click="toggleSideMenu"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ $route.meta.title }}</v-app-bar-title>

    <template v-slot:append></template>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("app/auth");

export default defineComponent({
  name: "AltNavbar",

  computed: {
    ...mapGetters(["isAuth"]),
  },

  methods: {
    ...mapMutations(["toggleSideMenu"]),
  },
});
</script>
