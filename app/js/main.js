require.config({
    baseUrl: './app/js',
    paths: {
        'jquery': '../vendor/jquery/dist/jquery'
    }
});

define(['app'], function (App) {
    'use strict';

    var app = new App('body');
    app.render();
});