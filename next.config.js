/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     // domains: ["res.cloudinary.com"],
//     loader: "cloudinary",
//     path: "https://res.cloudinary.com/dge5x9t8i/image/upload",
//   },

const imageConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dge5x9t8i/**",
      },
    ],
  },

  webpack: (config) => {
    // ignore formidable warnings
    config.ignoreWarnings = [
      // { module: /node_modules\/formidable\/src\/Formidable\.js/ },
      { file: /app\/layout\.tsx/ },
    ];

    return config;
  },
};

// module.exports = nextConfig;
module.exports = imageConfig;
// };
// const path = require("path");

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
// };
