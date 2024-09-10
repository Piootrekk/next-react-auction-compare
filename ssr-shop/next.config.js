/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dwjugfzxfzqmckkdqoaa.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dwjugfzxfzqmckkdqoaa.supabase.co",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
