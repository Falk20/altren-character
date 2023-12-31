<template>
  <v-card
    class="mb-4"
    :title="props.bag.title"
    :subtitle="`${props.bag.items.length}/${props.bag.capacity}`"
  >
    <template v-slot:append>
      <v-btn
        size="30"
        icon="mdi-trash-can"
        variant="plain"
        color="red"
        v-bind="props"
      />
    </template>
    <v-divider></v-divider>
    <v-card-text>
      <v-btn
        block
        prepend-icon="mdi-plus"
      >
        Предмет
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { IBag } from '@/helpers/types';

interface Props {
  bag: IBag
}

const props = defineProps<Props>()

const test = () => console.log('test')
</script>
