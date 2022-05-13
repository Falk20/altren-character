const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/altren-character/" : "/",

  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
