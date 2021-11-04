module.exports = function (config) {

  // Layouts
  config.addLayoutAlias('base', 'base.njk');

  // Pass-through files
  config.addPassthroughCopy('src/assets/');

  return {
    dir: {
        input: 'src',
        output: '_site',
        includes: '_includes',
        layouts: '_layouts',
        data: '_data'
    },
    templateFormats: ['njk', 'md', 'html', '11ty.js'],
    markdownTemplateEngine: 'njk'
  };

};