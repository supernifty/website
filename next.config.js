const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
        images: {unoptimized: true}
};

module.exports = withOffline(nextConfig);

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'standalone',
//  
//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,
//  
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,
//  
//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// }
//  
// module.exports = nextConfig
