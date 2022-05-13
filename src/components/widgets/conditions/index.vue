<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">
        <span>Эффекты</span>
        <v-btn
          variant="text"
          icon="mdi-pencil"
          @click="changeEditDialog(true)"
        />
      </h3>
      <EditForm
        v-model:editDialog="editDialog"
        @open-add-dialog="addDialog = true"
      />
      <AddForm v-model:addDialog="addDialog" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditForm from "./EditForm.vue";
import AddForm from "./AddForm.vue";

// import { createNamespacedHelpers } from "vuex";
// const { mapGetters, mapMutations } =
//   createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltFatigue",

  components: {
    EditForm,
    AddForm,
  },

  data() {
    return {
      editDialog: false,
      addDialog: false,
    };
  },

  methods: {
    changeEditDialog(value: boolean): void {
      this.editDialog = value;
    },
  },
});
</script>
