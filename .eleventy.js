const pluginSass = require('eleventy-plugin-sass');
const pluginSeo = require('eleventy-plugin-seo');
const seoData = require('./_data/seo.json');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images');

	eleventyConfig.addPlugin(pluginSass, {
		watch: ['**/*.{scss,sass}', '!node_modules/**'],
	});

	eleventyConfig.addPlugin(pluginSeo, seoData);

	eleventyConfig.addFilter('removeUrlProtocol', function (value) {
		return value.replace(/^[a-z]*:?\/\//i, '');
	});
};
