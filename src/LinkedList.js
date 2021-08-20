export class LinkedList extends Map {
  #reverseList = new Map()
  #isReverse = false
  #isCircular = false
  #current = null

  constructor (...args) {
    super([[null, undefined]])
    for (let [k, v] of args.entries()) {
      this.insert(v, args[k - 1])
    }
  }

  get [Symbol.toStringTag] () {
    return 'LinkedList'
  }

  get isReverse () {
    return this.#isReverse
  }

  get isCircular () {
    return this.#isCircular
  }

  * [Symbol.iterator] () {
    let [currNode, listType] = this.#isReverse
      ? [undefined, this.#reverseList]
      : [null, this]
    while (currNode = listType.get(currNode)) {
      yield currNode
    }
  }

  insert (newEl, prevEl = null) {
    const nextOfPrev = this.get(prevEl)
    this.set(prevEl, newEl).set(newEl, nextOfPrev)
    this.#reverseList.set(newEl, prevEl).set(nextOfPrev, newEl)
    return this
  }

  toggleReverse () {
    this.#isReverse = !this.#isReverse
    return this
  }

  toggleCirculation () {
    if (this.#isCircular = !this.#isCircular) {
      const lastEl = this.#reverseList.get(undefined)
      const firstEl = this.get(null)
      this.set(lastEl, firstEl)
      this.#reverseList.set(firstEl, lastEl)
    }
    return this
  }

  remove (item) {
    const nextOfItem = this.get(item)
    const prevOfItem = this.#reverseList.get(item)
    this.set(prevOfItem, nextOfItem)
    this.#reverseList.set(nextOfItem, prevOfItem)
    this.delete(item)
    this.#reverseList.delete(item)
    this.#current = this.#reverseList.get(undefined)
    return this
  }
}

