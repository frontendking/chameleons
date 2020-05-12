import { LinkedList } from './LinkedList'

export class Tree extends LinkedList {
  #rightLinked = new LinkedList()
  #current = null

  insert (value) {
    let root = super.get(null)
    if(root===undefined){
      super.insert(value)
    }else {

      while(true){
        if(value<root){
          root=super.get(value)
          if(root===undefined){
            super.set(root, value)
            break
          }
        }else {
          root=this.#rightLinked.get(value)
          if(root===undefined){
            this.#rightLinked.set(root, value)
            break
          }

        }

      }
    }
    // else {
    //   this.#rightLinked.insert(value)
    // }
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

