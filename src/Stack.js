export class Stack extends Array {
  push(...args){
    super.push(...args)
    return this
  }
  pop(...args){
    super.pop(...args)
    return this
  }
  peek(...args){
    return this[this.length-1]
  }
  clear(){
    this.length=0
    return this
  }
}
