const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve("./")];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../components"),
      "@components/common": path.resolve(__dirname, "../components/common"),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };
    return config;
  },
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
