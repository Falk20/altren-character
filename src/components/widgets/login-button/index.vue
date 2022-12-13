<template>
  <v-btn @click="googleSignIn">Авторизоваться</v-btn>
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
