import { LinkedList } from './LinkedList'

export class Tree extends LinkedList {
  #rightLinked = new LinkedList()
  #current = null

  insert (value) {
    const root = super.get(null)
    if(root===undefined||root>value){
      super.insert(value)
    }else {
      this.#rightLinked.insert(value)
    }
  }

  * [Symbol.iterator] () {
    yield this.get(null)
    if(this.#rightLinked.get(null)){
      yield this.#rightLinked.get(null)
    }
    if(this.get(this.get(null))!==undefined){
      yield this.get(this.get(null))
    }
  }

  get [Symbol.toStringTag] () {
    return 'Tree'
  }

}

