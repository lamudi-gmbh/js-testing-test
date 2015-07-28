// Karma configuration
// Generated on Sun Oct 20 2013 07:28:56 GMT+0200 (CEST)

module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine', 'requirejs'],

        files: [
            {pattern: 'app/vendor/**/*.js', included: false},
            {pattern: 'app/js/**/*.js', included: false},
            {pattern: 'app/test/**/*Spec.js', included: false},

            'app/test/test-main.js'
        ],

        exclude: [
            'app/js/main.js'
        ],

        reporters: ['progress', 'coverage'],

        preprocessors: {
            'src/**/*.js': ['coverage']
        },

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        captureTimeout: 3000,

        singleRun: false
    });
};