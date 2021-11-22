/** @type {import('next').NextConfig} */
const path = require("path");
const withLess = require("next-with-less");
const withTM = require("next-transpile-modules")(["@arco-design/web-react"]);

module.exports = withLess(
  withTM({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          // "primary-color": "red",
        },
      },
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      config.resolve.alias["@/assets"] = path.resolve(
        __dirname,
        "./public/assets"
      );
      config.resolve.alias["@"] = path.resolve(__dirname, ".");

      return config;
    },
    async redirects() {
      return [
        {
          source: "/",
          destination: "/welcome",
          permanent: true,
        },
      ];
    },
  })
);
