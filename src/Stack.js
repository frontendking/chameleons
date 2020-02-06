export class Stack extends Array {
  push(...args){
    super.push(...args)
    return this
  }
  pop(...args){
    return super.pop(...args)
  }
  peek(...args){
    return this[this.length-1]
  }
  clear(){
    this.length=0
    return this
  }
}
