import { List } from '../src/List'
import { strict as assert } from 'assert'

describe('List', () => {
  let list
  before(()=>{
    list = new List()
  })
  it('pos - Index of Current Position in list')
  it('length')
  it('clear')
  it('toString')
  it('getElement')
  it('insert')
  it('append',()=>{
    list.append(1)
    assert.equal(list.length,1)
  })
 /* it('remove', ()=>{
    assert.deepEqual(list.remove(1).dataStore(), [])
    list.append(1)
    list.append(2)
    assert.deepEqual(list.remove(1).dataStore(), [2])
  })*/
  it('front')
  it('end')
  it('prev')
  it('next')
  it('currPos')
  it('moveTo')
})
