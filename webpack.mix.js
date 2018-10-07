let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
let glob = require('glob-all');
let fs = require('fs-extra');
let PurgecssPlugin = require('purgecss-webpack-plugin');

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

mix.setPublicPath('assets')
    .js('_resources/js/app.js', 'js/')
    .extract(['turbolinks'])
    .less('_resources/less/app.less', 'css/')
    .options({
        postCss: [
            tailwindcss('./tailwind.js'),
        ]
    })
    .copy('_resources/img', 'assets/img')
    .browserSync({
        browser: 'Safari',
        proxy: false,
        server: {
            baseDir: '_site/',
        },
        files: ['_site/**/*.html', '_site/**/*.js', '_site/**/*.css']
    })
    .disableNotifications()
    .then(function () {
        fs.move('assets/mix-manifest.json', '_data/mix-manifest.json', { overwrite: true })
        .then(() => console.log('mix-manifest.json copied to _data/'))
    })

if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new PurgecssPlugin({

                // Specify the locations of any files you want to scan for class names.
                paths: glob.sync([
                    path.join(__dirname, '_site/**/*.html'),
                    path.join(__dirname, '_site/**/*.js')
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,

                        // Specify the file extensions to include when scanning for
                        // class names.
                        extensions: ['html', 'js', 'vue']
                    }
                ]
            })
        ]
    });
}
