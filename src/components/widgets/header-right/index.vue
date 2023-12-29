<template>
  <div class="d-flex">
    <v-btn class="mr-2" icon="mdi-cloud-upload" @click="saveChar" />

    <v-snackbar v-model="alert" :type="alertType">
      {{ alertText }}
    </v-snackbar>

    <v-btn icon="mdi-swap-horizontal" @click="switchChar" />
  </div>
</template>

<script setup lang="ts">
import { saveCharlist } from "@/firebase/db";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

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

const switchChar = async () => {
  await saveChar();

  router.push("/start");
}
</script>
