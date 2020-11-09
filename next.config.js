const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
  async redirects() {
    return [{ source: "/todo", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/todo", destination: "/" }];
  },
};
