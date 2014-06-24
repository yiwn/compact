var expect = require('chai').expect;

var compact = require('../index.js');

describe('Compact', function(){
    it('should work with objects', function(){
        var obj1 = {},
            obj2 = {
                name: null,
                age: 0,
                gender: 'female'
            };

        expect(compact(obj1))
            .to.eql({});

        expect(compact(obj2))
            .to.eql({
                age: 0,
                gender: 'female'
            });
    });

    it('should work with arrays', function(){
        var arr1 = [],
            arr2 = [null, 0, 'female'];

        expect(compact(arr1))
            .to.eql([]);

        expect(compact(arr2))
            .to.eql([0, 'female']);
    });

});
