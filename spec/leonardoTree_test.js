/**
 * Created by wnxhaja on 2/10/2016.
 */


var LeonardoTree = require('../lib/LeonardoTree');
var LeonardoTree = new LeonardoTree();

describe('Adding trees in tree array',function(){

    it('when no tree yet',function(){
        var value = 1,
            size = 1,
            length = 1;

        LeonardoTree.add(value);
        var expectedValue = LeonardoTree.treeArray[0].root.value;
        var expectedSize = LeonardoTree.treeArray[0].root.size();
        var expectedLength = LeonardoTree.treeArray.length;

        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);
        expect(length).toBe(expectedLength);
    });

    it('when contains 1 tree',function(){
        var expectedLength = LeonardoTree.treeArray.length;
        expect(1).toBe(expectedLength);

        var value = 2,
            size = 1;
        LeonardoTree.add(value);

        var expectedValue = LeonardoTree.treeArray[1].root.value;
        var expectedSize = LeonardoTree.treeArray[1].root.size();
        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);
    });

    it('when contains 2 or more',function(){
        // ARRAY.TREE.SIZE = [1,1]
        var expectedLength = LeonardoTree.treeArray.length;
        expect(2).toBe(expectedLength);


        var value = 3, size = 2;
        LeonardoTree.add(value);
        // ARRAY.TREE.SIZE = [2]


        var expectedLength = LeonardoTree.treeArray.length;
        expect(1).toBe(expectedLength);

        var expectedValue = LeonardoTree.treeArray[expectedLength-1].root.value;
        var expectedSize = LeonardoTree.treeArray[expectedLength-1].root.size();
        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);

        var value = 4, size = 1;
        LeonardoTree.add(value);
        // ARRAY.TREE.SIZE = [2,1]

        var expectedLength = LeonardoTree.treeArray.length;
        expect(2).toBe(expectedLength);

        var expectedValue = LeonardoTree.treeArray[expectedLength-1].root.value;
        var expectedSize = LeonardoTree.treeArray[expectedLength-1].root.size();
        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);

    });

});


describe('When searching a value',function(){

    //The Tree contains values added from previous test
    it('and the value is in the tree',function(){
        var expected;

        for(var i = 0; i<=4;i++) {
            expected = LeonardoTree.search(1);

            expect(true).toBe(expected);
        }
    });

    it('and the value is not in the tree',function(){

        var expected = LeonardoTree.search(100);

        expect(false).toBe(expected);
    });

});

