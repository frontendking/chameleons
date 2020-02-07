import { Queue } from '../src'
import { strict as assert } from 'assert'

describe('Queue', () => {
  let queue
  beforeEach(() => {
    queue = undefined
  })
  describe('crud', () => {
    it('enqueue', () => {
      queue = new Queue(1, 2, 3)
      assert.deepEqual(queue.enqueue(4, 5).enqueue(6),
        new Queue(6, 5, 4, 1, 2, 3))
    })
    it('dequeue', () => {
      queue = new Queue(1, 2, 3)
      assert.deepEqual(queue.dequeue().dequeue(), Queue.from([1]))
    })
    it('empty', () => {
      queue = new Queue()
      assert.deepEqual(queue.empty(), Queue.from([]))
    })
  })
  describe('navigation', () => {
    it('front', () => {
      queue = new Queue(1, 2, 3)
      assert.deepEqual(queue.front(), 1)
    })
    it('back', () => {
      queue = new Queue(1, 2, 3)
      assert.deepEqual(queue.back(), 3)
    })
  })
})
