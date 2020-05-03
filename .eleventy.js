module.exports = function (config) {

  config.addFilter("formatUTCDate", function (value) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];
    return `${days[value.getUTCDay()]}, ${months[value.getUTCMonth()]} ${value.getUTCDate()}, ${value.getUTCFullYear()}`;
  });
  config.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
