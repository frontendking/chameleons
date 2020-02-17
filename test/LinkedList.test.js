import { LinkedList } from '../src/LinkedList'
import { strict as assert } from 'assert'

describe('LinkedList', () => {
  let llist
  let item
  beforeEach(()=>{
    llist = new LinkedList()
    item = {label:'new2', value: 2}
  })
  it('insert', ()=>{
    llist = new LinkedList(1,2,3)
    console.log(llist)
    const newItem = item
    const res = llist.insert(newItem, 2)
    assert.deepEqual([...res], [1,2,newItem,3])
  })
  it('remove', ()=>{
    llist = new LinkedList(1,2,3)
    const res = llist.insert(item,1).remove(item)
    assert.deepEqual([...res], [1,2,3])
  })
})
