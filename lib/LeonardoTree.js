/**
 * Created by wnxhaja on 2/10/2016.
 *
 * Leonardo Tree
 */

module.exports = LeonardoTree;

function LeonardoTree() {
    this.root = null;
}

LeonardoTree.prototype = {

    //list of leonardo tree
    treeArray:  [],

    /**
     *
     * @param value Value to be added in the tree
     */
    add: function(value) {

        if (this.treeArray.length == 0)  //If tree array is empty, add new tree
            this.treeArray.push(createAnewTree(value));

        else if (this.treeArray.length == 1)   //if tree array have 1 tree
            this.treeArray.push(createAnewTree(value));

        else {

            //pop the last 2 trees
            var tree1 = this.treeArray.pop();
            var tree2 = this.treeArray.pop();

            if(tree1.root.size() === 1 && tree2.root.size() === 1)   //combine if trees have a value of 1
                this.treeArray.push(combineTrees(value,tree1,tree2));

            else{

                if(tree2.root.size() === tree1.root.size() + 1){    //trees can be combined
                    var newTree = combineTrees(value,tree1,tree2);
                    this.treeArray.push(newTree);
                }else{
                    this.treeArray.push(tree2);
                    this.treeArray.push(tree1);

                    var leonardoTree = createAnewTree(value);
                    this.treeArray.push(leonardoTree);
                }
            }
        }
    },

    /**
     *
     * @param value Value to be searched in the tree
     * @returns {boolean} TRUE|FALSE if found.
     */
    search: function(value){

        if(this.treeArray.length === 0)
            throw new Error('Searching an empty tree');

        function preOrderSearch(node){

            var match = compareValue(node.value,value);

            if(match){
                found = true;
                return found;
            }

            if(node.left!==null)
                preOrderSearch(node.left);

            if(node.right!==null)
                preOrderSearch(node.right);
        }

        function compareValue(nodeValue, value){
            return (nodeValue === value);

        }

        var found = false;

        for(var i = 0; i<this.treeArray.length;i++){
            preOrderSearch(this.treeArray[i].root);
        }

        return found;

    },

    remove: function(value){

        if(this.treeArray.length === 0)
            throw new Error('Searching an empty tree');
    }
};

//helper functions
/**
 *
 * @param value Value to be added
 * @returns {{value: *, size: *, left: null, right: null}}
 */
function createNode(value){
    return {
        value: value,
        size: function(){
            if(this.left === null || this.right === null)
                return 1;
            else
                return (this.left.size() + this.right.size());
        },
        left: null,
        right: null
    };
}

/**
 *
 * @param value Value to be added
 * @returns {LeonardoTree}
 */
function createAnewTree(value){
    var leonardoTree = new LeonardoTree();
    leonardoTree.root = createNode(value);
    return leonardoTree;
}

/**
 *
 * @param rootValue Value to be added
 * @param _left Smaller tree
 * @param _right Small tree
 * @returns {LeonardoTree}
 */
function combineTrees(rootValue,_left,_right){
    var leonardoTree = new LeonardoTree();
    //var sizeSum = _left.root.size + _right.root.size;
    leonardoTree.root = createNode(rootValue);
    leonardoTree.root.left = _left.root;
    leonardoTree.root.right = _right.root;

    return leonardoTree;
}
