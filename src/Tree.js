class Tree {
    constructor() {
        this.root = null
        this.leaf = null
    }

    addNode(newNode) {
        if (this.leaf) {
            let leftOrRight = newNode.data > this.leaf.data ? 'right' : 'left'
            if (!this.leaf[leftOrRight]) {
                this.leaf[leftOrRight] = newNode
                this.leaf = this.root
            } else {
                this.leaf = this.leaf[leftOrRight]
                this.addNode(newNode)
            }
        } else {
            this.root = newNode
            this.leaf = this.root
        }
    }
}

module.exports = Tree
