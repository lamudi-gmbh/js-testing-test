define(['app', 'jquery'], function(App, $) {

    describe('App', function() {

        it('app test 1', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(el.text()).toEqual('require.js up and running');
        });

        it('app test 2', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render2();

            expect(el.text()).toEqual('require.js up and running 2');
        });

    });

});