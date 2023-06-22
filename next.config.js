/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: false,
	images: {
		domains: [process.env.API_IMAGE_DOMAIN],
	},
};

module.exports = nextConfig;
