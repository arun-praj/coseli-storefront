const { hostname } = require("os")
const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["coseli-media.arunprajapati.com.np"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coseli-media.arunprajapati.com.np",
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = nextConfig
