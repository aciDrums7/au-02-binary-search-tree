class Tree {
    constructor() {
        this.root = null
    }

    addNode(newNode) {
        if (this.root) {
            if (newNode.data > this.root.data)
                this.addNodeToLeaf(this.root, newNode, true)
            else this.addNodeToLeaf(this.root, newNode, false)
        } else {
            this.root = newNode
        }
    }

    addNodeToLeaf(parent, newNode, isNewNodeGreaterThanParent) {
        let child = isNewNodeGreaterThanParent ? parent.right : parent.left
        if (!child) child = newNode
        else {
            const isNewNodeGreaterThanChild =
                newNode.data > child.data ? true : false
            if (isNewNodeGreaterThanChild)
                this.addNodeToLeaf(child, newNode, true)
            else this.addNodeToLeaf(child, newNode, false)
        }
    }
}

module.exports = Tree
