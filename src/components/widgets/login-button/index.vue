<template>
  <v-row class="h-100 align-center">
    <v-col>
      <v-btn prepend-icon="mdi-google" block @click="googleSignIn"
        >Авторизоваться</v-btn
      >
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { googleSignIn } from "@/firebase/config";

export default defineComponent({
  name: "AltLoginButton",

  methods: {
    googleSignIn,
  },
});
</script>

<style></style>
