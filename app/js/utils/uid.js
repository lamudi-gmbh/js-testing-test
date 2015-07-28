define(function() {
    'use strict';

    function UId() {}

    UId.prototype.getUID = function () {
        var that = this;

        return that.s4() + that.s4() + '-' + that.s4() + '-' + that.s4() + '-' +
            that.s4() + '-' + that.s4() + that.s4() + that.s4();
    };

    UId.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    return UId;
});