/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH || undefined;

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
    ? { output: "export", trailingSlash: true, basePath, assetPrefix: basePath ? basePath + "/" : undefined }
    : {
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        }
      })
};

export default nextConfig;
