export class Queue extends Array {
  enqueue(...args){
    args.reverse()
    this.unshift(...args)
    return this
  }
  dequeue(){
    this.pop()
    return this
  }
  empty(){
    this.length = 0
    return this
  }
  front(){
    return this[0]
  }
  back(){
    return this[this.length-1]
  }
}
