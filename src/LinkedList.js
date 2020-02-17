export class LinkedList extends Map {
  #reverseMap = new Map()

  constructor (...args) {
    super([['head', undefined]])
    for (let [k, v] of args.entries()) {
      this.insert(v, args[k - 1])
    }
  }

  insert (newEl, prevEl='head') {
    const nextOfPrev = this.get(prevEl)
    this.set(prevEl, newEl).set(newEl, nextOfPrev)
    this.#reverseMap.set(newEl, prevEl).set(nextOfPrev, newEl)
    return this
  }

  * [Symbol.iterator] () {
    let currNode = 'head'
    while (currNode = this.get(currNode)) {
      yield currNode
    }
  }
  get [Symbol.toStringTag](){
    return 'LinkedList'
  }

  remove (item) {
    const nextOfItem = this.get(item)
    const prevOfItem = this.#reverseMap.get(item)
    this.set(prevOfItem, nextOfItem)
    this.delete(item)
    return this
  }
}


