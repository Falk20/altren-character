<template>
  <v-container>
    <AltName />
    <AltKind />
    <AltPersonalTogglers />
    <AltKarmaFame />
  </v-container>
</template>

<script setup lang="ts">
import AltName from "@/components/widgets/name/index.vue";
import AltKind from "@/components/widgets/kind/index.vue";
import AltPersonalTogglers from "@/components/widgets/personal-togglers/index.vue";
import AltKarmaFame from "@/components/widgets/karma-fame/index.vue";
</script>
