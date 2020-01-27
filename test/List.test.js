import { List } from '../src/List'
import { strict as assert } from 'assert'


describe('List', () => {
  let list
  it('listSize - Number of elements in list', () => {
    list = new List([1, 2, 3, 4, 5, 6])
    list.append(7)
    list.append(8)
    console.log(list.listSize())
    assert.equal(1,1)
  })
  it('pos - Index of Current Position in list')
  it('length')
  it('clear')
  it('toString')
  it('getElement')
  it('insert')
  it('append')
  it('remove')
  it('front')
  it('end')
  it('prev')
  it('next')
  it('currPos')
  it('moveTo')
})
