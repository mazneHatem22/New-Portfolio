// @ts-check

// const isProduction = process.env.NODE_ENV === "production";
// const outputDir = process.env.BRANCH === "dev" ? "dev" : ".next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: outputDir,
  output: "export",
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
    styledComponents: {
      displayName: false,
      minify: true,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  experimental: {
    legacyBrowsers: false,
    swcFileReading: true,
    appDir: true,
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: true,
  swcMinify: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
