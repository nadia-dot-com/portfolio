import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
  cacheComponents: true,
  partialPrefetching: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
