export class LinkedList extends Map {
  constructor (...args) {
    super(args.map((v, k, o) => [v, [o[k-1], o[k + 1]]]))
    this.set('head', [undefined,args[0]])
    console.log(this)
  }

  * [Symbol.iterator] () {
    let currNode = 'head'
    while (currNode = this.get(currNode)) {
      yield currNode[1]
    }
  }

  insert(newItem, prevItem){
    const prevItemInfo = this.get(prevItem)
    this.set(prevItem, [prevItemInfo[0],newItem])
    this.set(newItem, [prevItem, prevItemInfo[1]])
    return this
  }

  remove(item){
    const nextOfitem = this.get(item)
    this.delete(item)
    this.set(nextOfitem)

    return this
  }
}


