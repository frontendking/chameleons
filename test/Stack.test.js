import { Stack } from '../src/Stack'
import { strict as assert } from 'assert'

describe('Stack', () => {
  let stack
  beforeEach(() => {
    stack = new Stack(1, 2)
  })
  describe('crud', () => {
    it('push', () => {
      assert.deepEqual(stack.push(3), new Stack(1, 2, 3))
    })
    it('pop')
    it('peek')
  })
})
