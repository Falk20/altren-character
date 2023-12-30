<template>
  <v-container class="pa-0">
    <h2 class="d-flex justify-center">Список персонажей</h2>
    <v-list density="compact">
      <v-list-item
        v-for="item in chars"
        :key="item.id"
        class="char"
        active-color="primary"
        :active="item.id === currentID"
        @click="chooseCharacter(item)"
      >
        <v-list-item-title>
          {{ item.personalInfo.name || "Нет имени" }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-row>
      <v-col>
        <v-btn
          size="small"
          prepend-icon="mdi-plus"
          block
          @click="createCharInDB"
        >
          Новый персонаж
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { createCharInDB, getAllChars } from "@/firebase/db";
import { setCharacterState } from "@/helpers/utils";
import { ICharacter } from "@/helpers/types"
import { onMounted } from "vue";
import { ref } from "vue";

const chars = ref<ICharacter[]>([])
const currentID = localStorage.getItem("charlistID")

const getData = async () => {
  const docs = await getAllChars();

  docs?.forEach((doc) => {
    chars.value.push({
      ...doc.data(),
      id: doc.id,
    } as ICharacter);
  });
}

const chooseCharacter = (character: any) => {
  if (character.id === currentID) {
    return;
  }

  setCharacterState(character);
}

onMounted(() => {
  getData()
})
</script>

<style scoped>
.char:not(:last-child) {
  border-bottom: 1px solid grey;
}
</style>
