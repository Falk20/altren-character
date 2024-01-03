<template>
  <div class="d-flex">
    <v-btn
      v-if="$route.name !== 'start'"
      :to="'/start'"
      icon="mdi-swap-horizontal"
    />

    <v-btn
      class="mr-2"
      icon="mdi-cloud-upload"
      @click="saveChar"
    />

    <v-snackbar
      v-model="alert"
      :type="alertType"
    >
      {{ alertText }}
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { saveCharlist } from "@/firebase/db";
import { ref } from "vue";

const alert = ref(false)
const alertType = ref("success")
const alertText = ref("Лист персонажа сохранён")

const saveChar = async () => {
  try {
    await saveCharlist();
    alertText.value = "Лист персонажа сохранён";
    alertType.value = "success";
  } catch (error) {
    console.error(error);
    alertText.value = "Ошибка сохранения";
    alertType.value = "error";
  } finally {
    alert.value = true;

    setTimeout(() => {
      alert.value = false;
    }, 2000);
  }
}
</script>
