module.exports = (api) => ({
  presets: ["@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    [
      "snowpack/assets/babel-plugin.js",
      {
        optionalExtensions: true,
        webModulesUrl: api.env("production") ? "/invoicer/web_modules" : "/web_modules",
      },
    ],
  ],
});
