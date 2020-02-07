import {Queue} from '../src'
import {strict as assert} from 'assert'

describe('Queue', ()=>{
  let queue
  beforeEach(()=>{
    queue = undefined
  })
  describe('crud', ()=>{
    it('enqueue', ()=>{
      queue = new Queue(1,2,3)
      assert.deepEqual(queue.enqueue(4,5).enqueue(6), new Queue([6,5,4,1,2,3]))
    })
    it('dequeue')

    it('end')
  })
  describe('navigation', ()=>{
    it('clear')
    it('front')
  })
})
