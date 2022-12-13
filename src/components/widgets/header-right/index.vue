<template>
  <div class="d-flex">
    <v-btn class="mr-2" icon="mdi-cloud-upload" @click="saveChar" />

    <v-dialog v-model="dialog">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-swap-horizontal" />
      </template>

      <v-card>
        <v-card-title> Сохранить текущие изменения? </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red-darken-1" @click="switchChar(false)"> Нет </v-btn>
          <v-btn color="green-darken-1" @click="switchChar(true)"> Да </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AltHeaderRight",

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    async saveChar() {
      console.log("saved");
    },

    async switchChar(needSave = true) {
      if (needSave) {
        await this.saveChar();
      }

      this.$router.push("/start");

      this.dialog = false;
    },
  },
});
</script>
