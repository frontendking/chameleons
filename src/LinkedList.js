export default class LinkedList extends Map {
  #reverseList = new Map()
  #isReverse = false

  constructor (...args) {
    super([[null, undefined]])
    for (let [k, v] of args.entries()) {
      this.insert(v, args[k - 1])
    }
  }

  insert (newEl, prevEl = null) {
    const nextOfPrev = this.get(prevEl)
    this.set(prevEl, newEl).set(newEl, nextOfPrev)
    this.#reverseList.set(newEl, prevEl).set(nextOfPrev, newEl)
    return this
  }

  reverse () {
    this.#isReverse = true
  }

  * [Symbol.iterator] () {
    let [currNode, listType] = this.#isReverse
      ? [undefined, this.#reverseList]
      : [null, this]

    while (currNode = listType.get(currNode)) {
      yield currNode
    }
  }

  get [Symbol.toStringTag] () {
    return 'LinkedList'
  }

  remove (item) {
    const nextOfItem = this.get(item)
    const prevOfItem = this.#reverseList.get(item)
    this.set(prevOfItem, nextOfItem)
    this.delete(item)
    return this
  }
}

const llist = new LinkedList()
llist.reverse()
console.log([...llist])

