define(function(require) {
    'use strict';

    var $ = require('jquery');

    var App = function(el) {
        this.el = $(el);
    };

    App.prototype.render = function() {
        this.el.html('require.js up and running');
    };

    App.prototype.render2 = function() {
        this.el.html('require.js up and running 2');
    };

    return App;

});