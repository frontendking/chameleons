export class Stack extends Array {
  push(...args){
    super.push(...args)
    return this
  }
}
