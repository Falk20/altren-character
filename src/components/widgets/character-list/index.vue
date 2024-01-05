<template>
  <v-container class="pa-0">
    <h2 class="d-flex justify-center mb-2">
      Список персонажей
    </h2>

    <v-btn
      class="mb-2"
      size="small"
      prepend-icon="mdi-plus"
      color="green"
      variant="tonal"
      block
      @click="createCharInDB"
    >
      Новый персонаж
    </v-btn>

    <template v-if="isLoading">
      <v-skeleton-loader
        v-for="item in 3"
        :key="item + '-skeleton'"
        type="list-item"
        width="100%"
      />
    </template>

    <v-list
      v-else
      density="compact"
    >
      <template
        v-for="char in chars"
        :key="char.id"
      >
        <char-item
          :item="char"
          @updateList="getData"
        />
        <v-divider />
      </template>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { createCharInDB, getAllChars } from "@/firebase/db";
import { ICharacter } from "@/helpers/types"
import { ref } from "vue";
import CharItem from "./char-item.vue";

const chars = ref<ICharacter[]>([])

const isLoading = ref(false)

const getData = async () => {
  isLoading.value = true
  chars.value = []

  const docs = await getAllChars();

  docs?.forEach((doc) => {
    chars.value.push({
      ...doc.data(),
      id: doc.id,
    } as ICharacter);
  });

  isLoading.value = false
}

getData()
</script>
