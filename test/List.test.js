import { strict as assert } from 'assert'
import { List } from '../src'

describe('List', () => {
  let list
  beforeEach(() => {
    list = new List()
  })
  it('insert', () => {
    list.append(1, 2, 4).insert(3, 4)
    assert.deepEqual(list, new List(1, 2, 3, 4))
    list.append(5, 6, 8).insert(7, 8)
    assert.deepEqual(list, new List(1, 2, 3, 4, 5, 6, 7, 8))
  })
  it('append', () => {
    list.append(1)
    assert.equal(list.length, 1)
  })
  it('remove', () => {
    let res = list.append(1).remove(1)
    assert.equal(res.toString(), [].toString())
    res = list.append({ a: 1, b: 2 }, { a: 2, c: 3 }).remove(v => v.c === 3)
    assert.equal(JSON.stringify(res), JSON.stringify([{ a: 1, b: 2 }]))
  })
  describe('traversing', () => {
    it('front', () => {
      assert.equal(list.front().currIndex, 0)
    })
    it('end', () => {
      list.append(1, 2, 3)
      assert.equal(list.end().currIndex, 2)
    })
    it('next', () => {
      list.append(1, 2, 3)
      assert.equal(list.next().currIndex, 1)
    })
    it('prev', () => {
      list.append(1, 2, 3)
      assert.equal(list.next().prev().currIndex, 0)
    })
    it('moveTo', () => {
      list.append(1, 2, 3)
      assert.equal(list.moveTo(1).currIndex, 1)
    })
    it('getElement', () => {

      list.append(1, 2, 3)
      assert.equal(list.moveTo(1).getElement(), 2)
    })
  })
  it('iter', () => {
    list.append(1, 2, 3)
    list.next()
    const elements = [...list]
    assert.deepEqual(elements, [2, 3])
    assert.deepEqual(list.currIndex, 1)
  })
})
