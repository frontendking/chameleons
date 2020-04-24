import { LinkedList } from './LinkedList'

export class Tree extends LinkedList {
  #rightLinked = new LinkedList()
  #current = null

  insert1 (value) {
    super.insert(value)
    if(super.get(null)<value){
      super.remove(value)
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

