<template>
  <v-container class="pa-0">
    <v-list density="compact">
      <v-list-subheader> Список персонажей </v-list-subheader>

      <v-list-item v-for="item in chars" :key="item.id" class="char" color="primary" :active="item.id === this.currentID"
        @click="chooseChar(item)">
        <v-list-item-title>{{
          item.personalInfo.name || "Нет имени"
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-row>
      <v-col>
        <v-btn size="small" prepend-icon="mdi-plus" block @click="createChar">
          Новый персонаж
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createCharInDB, getAllChars } from "@/firebase/db";
import { setCharacterState } from "@/helpers/utils";

export default defineComponent({
  name: "AltCharcterList",

  data() {
    return {
      chars: null as unknown,
      currentID: localStorage.getItem("charlistID"),
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getAllChars,

    async getData() {
      const docs = await this.getAllChars();

      const chars: any[] = [];

      docs?.forEach((doc) => {
        chars.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      this.chars = chars;
    },

    chooseChar(item: any) {
      if (item.id === this.currentID) {
        return;
      }

      setCharacterState(item);
    },

    async createChar() {
      await createCharInDB();
    },
  },
});
</script>

<style scoped>
.char:not(:last-child) {
  border-bottom: 1px solid grey;
}
</style>
@/helpers