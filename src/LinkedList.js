export class LinkedList extends Map {
  constructor(...args){
    // const args = [
    //   [1,2],
    //   [2,3],
    //   [3,null]
    // ]
    super(args.map((v,k,o)=>[v,o[k+1]]))
  }
  test(){
    console.log(this)
  }
}

let res = new LinkedList(1,2,3)
res.test()

