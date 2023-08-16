/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["localhost"],
	},

	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: "http",
	// 			hostname: "localhost",
	// 		},
	// 	],
	// },
};
const path = require("path");

module.exports = nextConfig;

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
