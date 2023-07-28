const proxyConfig = [
  {
    context: [
      "/weatherforecast",
      "/hour",
      "/code"
    ],
    target: "https://localhost:7095",
    secure: false
  }
]

module.exports = proxyConfig;
