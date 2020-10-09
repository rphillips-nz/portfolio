const pluginSass = require('eleventy-plugin-sass');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images');

  eleventyConfig.addPlugin(pluginSass, {
  	 watch: ['**/*.{scss,sass}', '!node_modules/**'],
  });
};
