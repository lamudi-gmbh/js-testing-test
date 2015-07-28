define(['utils/uid'], function(UId) {

    describe('UId Util', function() {

        it('check getUID method', function() {
            var uid = new UId().getUID();
            var uid2 = new UId().getUID();
            var total = uid.length;
            var dashes = (uid.match(/-/g) || []).length;
            var withoutDashes = uid.replace(/-/gi,'').length;

            expect(total).toBe(36);
            expect(dashes).toBe(4);
            expect(withoutDashes).toBe(32);
            expect(uid).not.toBe(uid2);
        });
    });

});