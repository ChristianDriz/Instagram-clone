import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*", // Allows all domains
            },
        ],
        unoptimized: true, // (Optional) Disables automatic image optimization
    },
};

export default nextConfig;
