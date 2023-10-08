module.exports = {
  // ... other webpack configuration options ...
  resolve: {
    fallback: {
      "crypto": false
    }
  },
};