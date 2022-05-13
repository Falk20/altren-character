<template>
  <div>
    <AltStats />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AltStats from "@/components/widgets/stats/index.vue";

export default defineComponent({
  name: "StatsView",

  components: {
    AltStats,
  },
});
</script>
