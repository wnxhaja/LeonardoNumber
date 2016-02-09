/**
 * Created by wnxhaja on 2/10/2016.
 */

var leonardoTree = require('../lib/leonardoTree');

describe('Adding trees in tree array',function(){

    it('when no tree yet',function(){
        var value = 3,
            size = 1,
            length = 1;

        leonardoTree.add(value);
        var expectedValue = leonardoTree.treeArray[0].root.value;
        var expectedSize = leonardoTree.treeArray[0].root.size;
        var expectedLength = leonardoTree.treeArray.length;

        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);
        expect(length).toBe(expectedLength);
    });

    it('when contains 1 tree',function(){
        var expectedLength = leonardoTree.treeArray.length;
        expect(1).toBe(expectedLength);

        var value = 3,
            size = 1;
        leonardoTree.add(value);

        var expectedValue = leonardoTree.treeArray[0].root.value;
        var expectedSize = leonardoTree.treeArray[0].root.size;
        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);
    });

    it('when contains 2 or more',function(){
        // ARRAY.TREE.SIZE = [1,1]
        var expectedLength = leonardoTree.treeArray.length;
        expect(2).toBe(expectedLength);

        var value = 5, size = 2;
        leonardoTree.add(value);
        // ARRAY.TREE.SIZE = [2]

        var expectedLength = leonardoTree.treeArray.length;
        expect(1).toBe(expectedLength);

        var expectedValue = leonardoTree.treeArray[expectedLength-1].root.value;
        var expectedSize = leonardoTree.treeArray[expectedLength-1].root.size;
        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);

        var value = 7, size = 1;
        leonardoTree.add(value);
        // ARRAY.TREE.SIZE = [2,1]

        var expectedLength = leonardoTree.treeArray.length;
        expect(2).toBe(expectedLength);

        var expectedValue = leonardoTree.treeArray[expectedLength-1].root.value;
        var expectedSize = leonardoTree.treeArray[expectedLength-1].root.size;
        expect(value).toBe(expectedValue);
        expect(size).toBe(expectedSize);
    });


});
