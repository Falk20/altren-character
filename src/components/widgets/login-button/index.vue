<template>
  <v-row class="h-100 align-center">
    <v-col>
      <v-btn
        prepend-icon="mdi-google"
        block
        @click="googleSignIn"
      >
        Авторизоваться
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { googleSignIn } from "@/firebase/config";
</script>