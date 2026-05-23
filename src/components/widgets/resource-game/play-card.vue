<template>
  <div
    :class="['card', selected && 'selected']"
    :style="{
      '--delay': `${order * 0.15}s`,
    }"
    @click="emit('whenSelect', order)"
  >
    <div class="front">
      <v-icon size="small">mdi-help</v-icon>
    </div>
    <div :class="['back', score === 0 ? 'fail' : 'success']">
      {{ score }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { score, order, selected } = defineProps<{
  score: number
  order: number
  selected: boolean
}>()

const emit = defineEmits<{
  whenSelect: [order: number]
}>()
</script>

<style lang="css" scoped>
.card {
  width: 100%;
  height: 140px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;

  animation: flyIntoGrid 1s cubic-bezier(0.175, 0.885, 0.32, 1.15) both;
  animation-delay: var(--delay, 0s);
  position: relative;
}

.front {
  z-index: 1;
  position: relative;
  background-color: rgb(var(--v-theme-primary));
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  transition: transform 0.3s cubic-bezier(0.2, 0.85, 0.4, 1.275);
}

.back {
  z-index: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  color: rgb(254, 254, 254);
  transform: rotateY(-180deg);
  transition: transform 0.3s cubic-bezier(0.2, 0.85, 0.4, 1.275);
}

.success {
  background-color: rgb(var(--v-theme-success));
}

.fail {
  background-color: rgb(var(--v-theme-error));
}

.selected .back {
  transform: rotateY(0deg);
  z-index: 2;
}

.selected .front {
  transform: rotateY(180deg);
  z-index: -1;
}

@keyframes flyIntoGrid {
  0% {
    /* Точка старта: левый нижний угол экрана */
    /* Сдвигаем карту из её финального Grid-места в угол стола */
    transform: translate(calc(-100vw + 50%), calc(-100vh - 50%)) rotate(-20deg)
      scale(0.3);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    /* Финальное состояние: встает точно в свою ячейку Grid */
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
  }
}
</style>
