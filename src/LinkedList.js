export class LinkedList extends Map {
  constructor(...args){
    super(args.map((v,k,o)=>[v,o[k+1]]))
    this.set('head', args[0])
  }
  *[Symbol.iterator](){
    yield 1
    yield 2
/*    let currNode = this.get('head')
    while(currNode = this.get(currNode)){
      yield currNode
    }*/
  }
  test(){
    console.log(this);
  }
}

let res = new LinkedList(1,2)
// console.log([...res])
res.test()

