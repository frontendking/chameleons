import { LinkedList } from '../src/LinkedList'
import { strict as assert } from 'assert'

describe('LinkedList', () => {
  let llist
  beforeEach(()=>{
    llist = new LinkedList()
  })
  it('find', ()=>{
    llist = new LinkedList(1,2,3)
    assert.deepEqual(llist.find(2),2)
  })
  it('insert', ()=>{

  })
})
