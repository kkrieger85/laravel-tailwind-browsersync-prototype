const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
*/
// see also https://stackoverflow.com/a/59754710/6039609
// https://medium.com/@wearethreebears/using-purgecss-to-remove-unused-tailwind-classes-with-laravel-mix-92dffba21ed7

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ]
    })
    .purgeCss({
        enabled: true, //mix.inProduction(),
    })
    .browserSync({
        proxy: {
            target: "laravel-prototype.ddev.site"
        },
        https: {
            key: "/home/kkrieger/tmp/master.key",
            cert: "/home/kkrieger/tmp/master.crt"
        }, open: false
    });
