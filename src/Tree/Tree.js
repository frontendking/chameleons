export class BST {
  root = null

  create (v) {
    const node = {
      value: v,
      right: null,
      left: null
    }

    if (!this.root) {
      this.root = node
    } else {
      let current = this.root
      let parrent
      while (true) {
        parrent = current
        if (v < current.value) {
          current = current.left
          if (parrent.left === null) {
            parrent.left = node
            break
          }
        } else {
          current = current.right
          if (parrent.right === null) {
            parrent.right = node
            break
          }
        }
      }
    }
    return this.root
  };

  read () {
    return this.root
  }
}
