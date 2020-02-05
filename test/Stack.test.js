import { Stack } from '../src/Stack'
import { strict as assert } from 'assert'

describe('Stack', () => {
  let stack
  beforeEach(() => {
    stack = undefined
  })
  describe('crud', () => {
    it('push', () => {
      stack = new Stack(1, 2)
      assert.deepEqual(stack.push(3), new Stack(1, 2, 3))
    })
    it('pop', () => {
      stack = new Stack(1, 2, 3)
      assert.deepEqual(stack.pop(), new Stack(1, 2))
    })
    it('peek', () => {
      stack = new Stack(1, 2, 3)
      assert.deepEqual(stack.peak(), 3)
    })
    it('clear', ()=>{
      stack = new Stack(1,2,3)
      assert.deepEqual(stack.clear(), new Stack())
    })
  })
})
