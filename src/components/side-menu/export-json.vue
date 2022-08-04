<template>
  <v-list density="compact" nav>
    <v-list-item title="Экспорт" @click="importJson"></v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapState } from "vuex";

export default defineComponent({
  name: "AltExportJson",

  computed: {
    ...mapState(["character"]),
  },

  methods: {
    importJson(): void {
      const stateJson = JSON.stringify(this.character);
      const stateFile =
        "data:text/json;charset=utf-8," + encodeURIComponent(stateJson);

      const linkElem = document.createElement("a");
      linkElem.setAttribute("href", stateFile);
      linkElem.setAttribute("download", "character.json");
      linkElem.click();
    },
  },
});
</script>
