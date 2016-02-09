/**
 * Created by wnxhaja on 2/10/2016.
 *
 * Leonardo Tree
 */

function lopSidedTree() {
    this.root = null;
}

module.exports = {

    treeArray:  new Array(),

    add: function(value) {


        if (this.treeArray.length == 0) {    //If tree array is empty, add new tree
            var leonardoTree = createAnewTree(value);
            this.treeArray.push(leonardoTree);

        } else if (this.treeArray.length == 1) {    //if tree array have 1 tree
            var leonardoTree = createAnewTree(value);
            this.treeArray.push(leonardoTree);

        } else {
            //pop the last 2 trees
            var tree1 = this.treeArray.pop();
            var tree2 = this.treeArray.pop();

            if(tree1.root.size === 1 && tree2.root.size === 1){    //combine if trees have a value of 1
                var newTree = combineTrees(value,tree1,tree2);
                this.treeArray.push(newTree);
                return value;
            }else{

                if(tree2.root.size === tree1.root.size + 1){    //trees can be combined
                    var newTree = combineTrees(value,tree1,tree2);
                    this.treeArray.push(newTree);
                }else{
                    var leonardoTree = createAnewTree(value);
                    this.treeArray.push(leonardoTree);
                }
            }
        }
    }
};

//helper functions
/**
 *
 * @param value Value to be added
 * @param size Size of the tree
 * @returns {{value: *, size: *, left: null, right: null}}
 */
function createNode(value,size){
    return {
        value: value,
        size: size,
        left: null,
        right: null
    };
}

/**
 *
 * @param value Value to be added
 * @returns {lopSidedTree}
 */
function createAnewTree(value){
    var leonardoTree = new lopSidedTree();
    leonardoTree.root = createNode(value,1);
    return leonardoTree;
}

/**
 *
 * @param rootValue Value to be added
 * @param _left Smaller tree
 * @param _right Small tree
 * @returns {lopSidedTree} New Tree
 */
function combineTrees(rootValue,_left,_right){


    var leonardoTree = new lopSidedTree();
    var sizeSum = _left.root.size + _right.root.size;
    leonardoTree.root = createNode(rootValue,sizeSum);
    leonardoTree.root.left = _left;
    leonardoTree.root.right = _right;

    return leonardoTree;
}
