export class Stack extends Array {
  push(...args){
    super.push(...args)
    return this
  }
  pop(...args){
    super.pop(...args)
    return this
  }
  peak(...args){
    return this[this.length-1]
  }
}
