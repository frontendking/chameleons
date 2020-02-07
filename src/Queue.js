export class Queue extends Array {
  enqueue(...args){
    args.reverse()
    this.shift(...args)
    return this
  }
}
