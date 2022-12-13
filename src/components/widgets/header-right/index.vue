<template>
  <div class="d-flex">
    <v-btn class="mr-2" icon="mdi-cloud-upload" @click="saveChar" />

    <v-snackbar v-model="alert" :type="alertType">
      {{ alertText }}
    </v-snackbar>

    <v-btn v-bind="props" icon="mdi-swap-horizontal" @click="switchChar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { saveCharlist } from "@/firebase/db";

export default defineComponent({
  name: "AltHeaderRight",

  data() {
    return {
      alert: false,
      alertType: "success",
      alertText: "Лист персонажа сохранён",
    };
  },

  methods: {
    async saveChar() {
      try {
        await saveCharlist();
        this.alertText = "Лист персонажа сохранён";
        this.alertType = "success";
      } catch (error) {
        console.error(error);
        this.alertText = "Ошибка сохранения";
        this.alertType = "error";
      } finally {
        this.alert = true;

        setTimeout(() => {
          this.alert = false;
        }, 2000);
      }
    },

    async switchChar() {
      await this.saveChar();

      this.$router.push("/start");
    },
  },
});
</script>
