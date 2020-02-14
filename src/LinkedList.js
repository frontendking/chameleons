export class LinkedList extends Map {
  constructor (...args) {
    super(args.map((v, k, o) => [v, o[k + 1]]))
    this.set('head', args[0])
  }

  * [Symbol.iterator] () {
    let currNode = 'head'
    while (currNode = this.get(currNode)) {
      yield currNode
    }
  }
  find(el){
    return this.get(el)
  }
}


