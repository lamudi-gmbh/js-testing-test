// Karma configuration
// Generated on Sun Oct 20 2013 07:28:56 GMT+0200 (CEST)

module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine', 'requirejs'],

        files: [
            {pattern: 'lib/**/*.js', included: false},
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'test/**/*Spec.js', included: false},

            'test/test-main.js'
        ],

        exclude: [
            'src/main.js'
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