/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	env: {
		DB_URI: "mongodb://localhost:27017/riverplate",
		API_URL: "http://localhost:3000",
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
};

module.exports = nextConfig;
