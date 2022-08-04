<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list density="compact" nav>
      <v-list-item
        v-for="(page, index) in pageList"
        :key="index"
        :to="{ name: page.name }"
        :title="getPageTitle(page)"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <AltExportJson />
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordNormalized } from "vue-router";
import { mapGetters, mapMutations } from "vuex";

import AltExportJson from "./export-json.vue";

export default defineComponent({
  name: "AltSideMenu",

  components: {
    AltExportJson,
  },

  computed: {
    ...mapGetters(["sideMenu"]),

    drawer: {
      get(): boolean {
        return this.sideMenu;
      },
      set(value: boolean) {
        this.changeSideMenu(value);
      },
    },

    pageList(): RouteRecordNormalized[] {
      return this.$router.getRoutes();
    },
  },

  methods: {
    ...mapMutations(["changeSideMenu"]),
    // RouteRecordNormalized возвращает unknown, а компонент принимает только string
    // eslint-disable-next-line
    getPageTitle(page: RouteRecordNormalized): any {
      return page?.meta?.title ?? "";
    },
  },
});
</script>
