module.exports = {
    apps: [{
      name: "geo_api",
      script: "server.js", // Replace with the entry point of your application
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      }
    }]
  };
  