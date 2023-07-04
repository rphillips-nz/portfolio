const pluginSeo = require('eleventy-plugin-seo');
const seoData = require('./_data/seo.json');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images');
	eleventyConfig.addPassthroughCopy('css');

	eleventyConfig.addFilter('displayifyUrl', function (value) {
		return value.replace(/^[a-z]*:?\/\//i, '').replace(/\/+$/, '');
	});

	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.addPlugin(pluginSeo, seoData);
};
