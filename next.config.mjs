/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" }
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: isStaticExport },
  ...(isStaticExport
    ? {
        // Static preview build for GitHub Pages, served from /portfolio.
        // The server deployment (Netlify) runs at the domain root.
        output: "export",
        basePath: "/portfolio",
        assetPrefix: "/portfolio/"
      }
    : {
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        }
      })
};

export default nextConfig;
