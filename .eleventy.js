const pluginCloudCannon = require('eleventy-plugin-cloudcannon');
const pluginSeo = require('eleventy-plugin-seo');
const seoData = require('./_data/seo.json');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images');
	eleventyConfig.addPassthroughCopy('css');

	eleventyConfig.addFilter('removeUrlProtocol', function (value) {
		return value.replace(/^[a-z]*:?\/\//i, '');
	});

	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.addPlugin(pluginCloudCannon);
	eleventyConfig.addPlugin(pluginSeo, seoData);
};
