export class LinkedList extends Map {
  #reverseMap = new Map()

  constructor (...args) {
    super()
    this.set('head', undefined)
    this.insert(args[0], 'head')
    if(this.get('head')){
      for(let [k,v] of args.entries()){
        this.insert(v, args[k-1])
      }
    }
  }
  insert(newEl, prevEl){
    const nextOfPrev = this.get(prevEl)
    this.set(prevEl, newEl)
    this.set(newEl, nextOfPrev)
    this.#reverseMap.set(nextOfPrev, newEl)
    this.#reverseMap.set(newEl, prevEl)
    return this
  }
  * [Symbol.iterator] () {
    let currNode = 'head'
    while (currNode = this.get(currNode)) {
      yield currNode
    }
  }

  remove (item) {
    const nextOfItem = this.get(item)
    const prevOfItem = this.#reverseMap.get(item)
    this.delete(item)
    this.insert(nextOfItem, prevOfItem)
    return this
  }
}


