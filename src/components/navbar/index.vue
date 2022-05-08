<template>
  <v-app-bar color="primary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ $route.meta.title }}</v-app-bar-title>

    <template v-slot:append></template>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "AltNavbar",

  methods: {
    ...mapMutations(["toggleSideMenu"]),
  },
});
</script>
