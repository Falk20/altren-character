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
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordNormalized } from "vue-router";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "AltSideMenu",

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

    getPageTitle(page: RouteRecordNormalized): any {
      return page?.meta?.title ?? "";
    },
  },
});
</script>
